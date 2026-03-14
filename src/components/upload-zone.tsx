'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Download, Loader2, Check, Trash2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

interface ImageFile {
  id: string;
  file: File;
  preview: string;
  originalSize: number;
  compressedSize?: number;
  compressedBase64?: string;
  savings?: number;
  format?: string;
  status: 'pending' | 'compressing' | 'done' | 'error';
}

export function UploadZone() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
      const maxSize = 20 * 1024 * 1024;

      if (!validTypes.includes(file.type)) {
        toast.error(`${file.name}: format non supporté`);
        return false;
      }
      if (file.size > maxSize) {
        toast.error(`${file.name}: fichier trop volumineux (max 20 Mo)`);
        return false;
      }
      return true;
    });

    const newImages: ImageFile[] = validFiles.map(file => ({
      id: `${file.name}-${Date.now()}-${Math.random()}`,
      file,
      preview: URL.createObjectURL(file),
      originalSize: file.size,
      status: 'pending' as const
    }));

    setImages(prev => [...prev, ...newImages]);

    if (validFiles.length > 0) {
      toast.success(`${validFiles.length} image(s) ajoutée(s)`);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/webp': ['.webp']
    },
    maxFiles: 20
  });

  const removeImage = (id: string) => {
    setImages(prev => {
      const image = prev.find(img => img.id === id);
      if (image) URL.revokeObjectURL(image.preview);
      return prev.filter(img => img.id !== id);
    });
  };

  const clearAll = () => {
    images.forEach(img => URL.revokeObjectURL(img.preview));
    setImages([]);
  };

  const compressImages = async () => {
    const pendingImages = images.filter(img => img.status === 'pending');
    if (pendingImages.length === 0) {
      toast.error('Aucune image à compresser');
      return;
    }

    setIsCompressing(true);

    const formData = new FormData();
    pendingImages.forEach(img => formData.append('files', img.file));

    try {
      setImages(prev => prev.map(img =>
        img.status === 'pending' ? { ...img, status: 'compressing' as const } : img
      ));

      const response = await fetch('/api/compress', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Erreur de compression');

      setImages(prev => prev.map(img => {
        const result = data.results.find(
          (r: { originalName: string; originalSize: number }) =>
            r.originalName === img.file.name && r.originalSize === img.originalSize
        );

        if (result) {
          return {
            ...img,
            compressedSize: result.compressedSize,
            compressedBase64: result.compressedBase64,
            savings: result.savings,
            format: result.format,
            status: 'done' as const
          };
        }
        return img;
      }));

      toast.success(`${data.results.length} image(s) compressée(s)`);

    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Erreur lors de la compression');
      setImages(prev => prev.map(img =>
        img.status === 'compressing' ? { ...img, status: 'pending' as const } : img
      ));
    } finally {
      setIsCompressing(false);
    }
  };

  const downloadImage = (image: ImageFile) => {
    if (!image.compressedBase64) return;

    const link = document.createElement('a');
    const baseName = image.file.name.replace(/\.[^/.]+$/, '');
    const extension = image.format || 'webp';
    link.href = `data:image/${extension};base64,${image.compressedBase64}`;
    link.download = `${baseName}-compressed.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    const doneImages = images.filter(img => img.status === 'done');
    doneImages.forEach((img, index) => {
      setTimeout(() => downloadImage(img), index * 200);
    });
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 o';
    const k = 1024;
    const sizes = ['o', 'Ko', 'Mo'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const pendingCount = images.filter(img => img.status === 'pending').length;
  const doneCount = images.filter(img => img.status === 'done').length;
  const totalSaved = images
    .filter(img => img.status === 'done')
    .reduce((acc, img) => acc + (img.originalSize - (img.compressedSize || 0)), 0);

  return (
    <div className="w-full space-y-6">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`
          relative overflow-hidden rounded-2xl border-2 border-dashed p-10
          transition-all duration-200 cursor-pointer
          ${isDragActive
            ? 'border-violet-400 bg-violet-50'
            : 'border-slate-200 hover:border-violet-300 hover:bg-slate-50'
          }
        `}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`p-4 rounded-2xl ${isDragActive ? 'bg-violet-100' : 'bg-slate-100'}`}>
            <Upload className={`w-8 h-8 ${isDragActive ? 'text-violet-600' : 'text-slate-400'}`} />
          </div>

          <div>
            <p className="text-lg font-medium text-slate-900">
              {isDragActive ? 'Déposez vos images' : 'Glissez-déposez vos images'}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              ou <span className="text-violet-600 font-medium cursor-pointer">parcourir</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full">PNG</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full">JPEG</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full">WebP</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full">Max 20 Mo</span>
          </div>
        </div>
      </div>

      {/* Images list */}
      {images.length > 0 && (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">
              {images.length} image{images.length > 1 ? 's' : ''}
              {doneCount > 0 && (
                <span className="ml-2 text-emerald-600 font-medium">
                  · {formatBytes(totalSaved)} économisé{totalSaved > 1000 ? 's' : ''}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAll}
                disabled={isCompressing}
                className="text-slate-500 hover:text-slate-900"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Effacer
              </Button>

              {pendingCount > 0 && (
                <Button
                  onClick={compressImages}
                  disabled={isCompressing}
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25"
                >
                  {isCompressing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Compression...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Compresser ({pendingCount})
                    </>
                  )}
                </Button>
              )}

              {doneCount > 1 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadAll}
                  className="border-slate-200"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Télécharger tout
                </Button>
              )}
            </div>
          </div>

          {/* Image cards */}
          <div className="grid gap-2">
            {images.map(image => (
              <Card
                key={image.id}
                className={`
                  overflow-hidden border transition-all
                  ${image.status === 'done' ? 'border-emerald-200 bg-emerald-50/50' : 'border-slate-200'}
                  ${image.status === 'compressing' ? 'border-violet-200 bg-violet-50/50' : ''}
                `}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    {/* Preview */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={image.preview}
                        alt={image.file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {image.file.name}
                      </p>

                      <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                        <span>{formatBytes(image.originalSize)}</span>

                        {image.status === 'done' && image.compressedSize && (
                          <>
                            <span>→</span>
                            <span className="font-semibold text-slate-900">
                              {formatBytes(image.compressedSize)}
                            </span>
                            <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">
                              -{image.savings}%
                            </span>
                          </>
                        )}

                        {image.status === 'compressing' && (
                          <span className="flex items-center gap-1.5 text-violet-600 font-medium">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Compression en cours...
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {image.status === 'done' && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => downloadImage(image)}
                            className="bg-slate-900 hover:bg-slate-800 text-white h-9"
                          >
                            <Download className="w-3.5 h-3.5 mr-1.5" />
                            Télécharger
                          </Button>
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </div>
                        </>
                      )}

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeImage(image.id)}
                        disabled={isCompressing}
                        className="w-8 h-8 text-slate-400 hover:text-slate-900"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
