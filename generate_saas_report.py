from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.lib import colors
from reportlab.lib.units import cm, inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
import os

# Register fonts
pdfmetrics.registerFont(TTFont('SimHei', '/usr/share/fonts/truetype/chinese/SimHei.ttf'))
pdfmetrics.registerFont(TTFont('Microsoft YaHei', '/usr/share/fonts/truetype/chinese/msyh.ttf'))
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))

# Register font families to enable bold
registerFontFamily('Microsoft YaHei', normal='Microsoft YaHei', bold='Microsoft YaHei')
registerFontFamily('SimHei', normal='SimHei', bold='SimHei')
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')

# Create document
output_path = '/home/z/my-project/download/guide_clonage_saas_fr.pdf'
os.makedirs(os.path.dirname(output_path), exist_ok=True)

doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    rightMargin=2*cm,
    leftMargin=2*cm,
    topMargin=2*cm,
    bottomMargin=2*cm,
    title='Guide_ClonaGe_SaaS_Fr',
    author='Z.ai',
    creator='Z.ai',
    subject='Guide complet de clonage SaaS americain vers le marche francophone'
)

# Styles
styles = getSampleStyleSheet()

# Cover title style
cover_title = ParagraphStyle(
    name='CoverTitle',
    fontName='Microsoft YaHei',
    fontSize=36,
    leading=44,
    alignment=TA_CENTER,
    spaceAfter=30
)

cover_subtitle = ParagraphStyle(
    name='CoverSubtitle',
    fontName='SimHei',
    fontSize=18,
    leading=24,
    alignment=TA_CENTER,
    spaceAfter=20
)

cover_author = ParagraphStyle(
    name='CoverAuthor',
    fontName='SimHei',
    fontSize=14,
    leading=20,
    alignment=TA_CENTER,
    spaceAfter=10
)

# Heading styles
h1_style = ParagraphStyle(
    name='H1Style',
    fontName='Microsoft YaHei',
    fontSize=20,
    leading=28,
    alignment=TA_LEFT,
    spaceAfter=18,
    spaceBefore=24,
    textColor=colors.HexColor('#1F4E79')
)

h2_style = ParagraphStyle(
    name='H2Style',
    fontName='Microsoft YaHei',
    fontSize=16,
    leading=22,
    alignment=TA_LEFT,
    spaceAfter=12,
    spaceBefore=18,
    textColor=colors.HexColor('#2E75B6')
)

h3_style = ParagraphStyle(
    name='H3Style',
    fontName='SimHei',
    fontSize=13,
    leading=18,
    alignment=TA_LEFT,
    spaceAfter=8,
    spaceBefore=12,
    textColor=colors.HexColor('#404040')
)

# Body styles
body_style = ParagraphStyle(
    name='BodyStyle',
    fontName='SimHei',
    fontSize=11,
    leading=18,
    alignment=TA_LEFT,
    spaceAfter=10,
    firstLineIndent=24,
    wordWrap='CJK'
)

body_no_indent = ParagraphStyle(
    name='BodyNoIndent',
    fontName='SimHei',
    fontSize=11,
    leading=18,
    alignment=TA_LEFT,
    spaceAfter=10,
    wordWrap='CJK'
)

bullet_style = ParagraphStyle(
    name='BulletStyle',
    fontName='SimHei',
    fontSize=11,
    leading=16,
    alignment=TA_LEFT,
    leftIndent=20,
    spaceAfter=4,
    wordWrap='CJK'
)

# Table styles
table_header = ParagraphStyle(
    name='TableHeader',
    fontName='Microsoft YaHei',
    fontSize=10,
    leading=14,
    textColor=colors.white,
    alignment=TA_CENTER
)

table_cell = ParagraphStyle(
    name='TableCell',
    fontName='SimHei',
    fontSize=9,
    leading=13,
    alignment=TA_LEFT,
    wordWrap='CJK'
)

table_cell_center = ParagraphStyle(
    name='TableCellCenter',
    fontName='SimHei',
    fontSize=9,
    leading=13,
    alignment=TA_CENTER,
    wordWrap='CJK'
)

# Build story
story = []

# ========== COVER PAGE ==========
story.append(Spacer(1, 80))
story.append(Paragraph('<b>GUIDE DE CLONAGE SaaS</b>', cover_title))
story.append(Paragraph('Du marche americain vers le marche francophone', cover_subtitle))
story.append(Spacer(1, 40))
story.append(Paragraph('Budget 0 EUR - MVP en 30 jours', cover_subtitle))
story.append(Spacer(1, 60))
story.append(Paragraph('Cas etude : TinyPNG', cover_author))
story.append(Paragraph('Outil de compression d\'images en ligne', cover_author))
story.append(Spacer(1, 80))
story.append(Paragraph('Rapport complet en 4 phases', cover_author))
story.append(Spacer(1, 40))
story.append(Paragraph('Janvier 2025', cover_author))

story.append(PageBreak())

# ========== TABLE OF CONTENTS ==========
story.append(Paragraph('<b>SOMMAIRE</b>', h1_style))
story.append(Spacer(1, 20))

toc_items = [
    ('PHASE 1 - Identifier le SaaS US a cloner', '3'),
    ('PHASE 2 - Decortiquer le SaaS cible', '6'),
    ('PHASE 3 - Stack clonage a budget zero', '9'),
    ('PHASE 4 - Plan d\'execution 4 semaines', '14'),
    ('Quick Start en 3 etapes', '18'),
]

for item, page in toc_items:
    story.append(Paragraph(f'{item} {"." * 50} {page}', body_no_indent))

story.append(PageBreak())

# ========== PHASE 1 ==========
story.append(Paragraph('<b>PHASE 1 - IDENTIFIER LE SAAS US A CLONER</b>', h1_style))
story.append(Spacer(1, 16))

story.append(Paragraph('<b>1.1 Criteres de selection</b>', h2_style))
story.append(Paragraph('Pour identifier le SaaS americain optimal a cloner pour le marche francophone, nous avons defini des criteres precis permettant de maximiser les chances de succes tout en minimisant les risques et les couts de developpement. Ces criteres ont ete selectionnes pour garantir un equilibre entre opportunite de marche, faisabilite technique et potentiel de monetisation.', body_style))

story.append(Paragraph('Les criteres retenus pour cette analyse comprennent la presence d\'une niche peu ou pas exploitee en France, un modele economique freemium ou par abonnement simple facilement comprehensible, des fonctionnalites replicables avec des outils gratuits ou a tres faible cout, et un fort potentiel de marche sur l\'ensemble de la francophonie incluant la France, la Belgique, la Suisse et le Quebec.', body_style))

story.append(Paragraph('<b>1.2 Candidats analyses</b>', h2_style))

# Table of candidates
candidates_data = [
    [Paragraph('<b>SaaS</b>', table_header), Paragraph('<b>Revenus</b>', table_header), 
     Paragraph('<b>Fonctionnalite Core</b>', table_header), Paragraph('<b>Score</b>', table_header)],
    [Paragraph('Motion', table_cell), Paragraph('50M$ ARR', table_cell_center), 
     Paragraph('Calendrier IA automatise', table_cell), Paragraph('4/10', table_cell_center)],
    [Paragraph('Carrd', table_cell), Paragraph('1.5M$ ARR', table_cell_center), 
     Paragraph('Createur site one-page', table_cell), Paragraph('6/10', table_cell_center)],
    [Paragraph('TinyPNG', table_cell), Paragraph('660K$/an', table_cell_center), 
     Paragraph('Compression images', table_cell), Paragraph('9/10', table_cell_center)],
    [Paragraph('Remove.bg', table_cell), Paragraph('Acquis Canva', table_cell_center), 
     Paragraph('Suppression fond image', table_cell), Paragraph('7/10', table_cell_center)],
    [Paragraph('Otter.ai', table_cell), Paragraph('100M$ ARR', table_cell_center), 
     Paragraph('Transcription audio/video', table_cell), Paragraph('3/10', table_cell_center)],
    [Paragraph('Typeform', table_cell), Paragraph('91M$/an', table_cell_center), 
     Paragraph('Createur formulaires', table_cell), Paragraph('5/10', table_cell_center)],
]

t = Table(candidates_data, colWidths=[2.5*cm, 2.5*cm, 6*cm, 2*cm])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.HexColor('#E8F4E8')),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('BACKGROUND', (0, 6), (-1, 6), colors.HexColor('#F5F5F5')),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 1 : Comparaison des SaaS americains candidats au clonage</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>1.3 SaaS selectionne : TinyPNG</b>', h2_style))
story.append(Paragraph('Apres analyse approfondie des differents candidats, TinyPNG a ete selectionne comme le meilleur candidat pour un clonage sur le marche francophone. Cette decision repose sur plusieurs facteurs determinants qui permettent d\'optimiser les chances de succes tout en maintenant un budget de developpement a zero euro.', body_style))

story.append(Paragraph('<b>Pourquoi TinyPNG ?</b>', h3_style))

story.append(Paragraph('- <b>Revenus prouves</b> : 660 000 dollars de revenus annuels avec une equipe de seulement 6 personnes, demontrant la viabilite du modele economique et la possibilite de generer des revenus significatifs avec des ressources limitees.', bullet_style))
story.append(Paragraph('- <b>Simplicite de replication</b> : La fonctionnalite principale, la compression d\'images, est techniquement accessible grace a des algorithmes open-source deja disponibles et des bibliotheques de traitement d\'images gratuites.', bullet_style))
story.append(Paragraph('- <b>Absence de version francaise dediee</b> : Les utilisateurs francophones utilisent actuellement TinyPNG en anglais, creant une opportunite de differentiation par la localisation et l\'experience utilisateur native francophone.', bullet_style))
story.append(Paragraph('- <b>Marche B2B et B2C important</b> : Les developpeurs web, les professionnels du e-commerce, les photographes et les marketeurs representent une cible diverse et en croissance constante pour ce type de service.', bullet_style))
story.append(Paragraph('- <b>Differentiation RGPD possible</b> : Une solution 100% francaise permet de se differencier sur le respect de la vie privee et la conformite reglementaire europeenne, un argument de vente majeur pour les entreprises francaises.', bullet_style))
story.append(Paragraph('- <b>Modele freemium simple</b> : Le modele economique est facilement comprehensible et applicable, avec un acces gratuit limite et des options payantes pour les utilisateurs intensifs.', bullet_style))

story.append(Paragraph('<b>1.4 Analyse du marche francophone</b>', h2_style))
story.append(Paragraph('Le marche francophone represente une opportunite significative pour un clone de TinyPNG. La France compte plus de 15 000 entreprises dans le secteur du SaaS selon les donnees du Trade.gov, avec un marche du Software as a Service estime a 18,75 milliards de dollars d\'ici 2035, affichant une croissance annuelle de 9,33%. Cette dynamique de marche cree un environnement favorable pour l\'introduction d\'un nouveau service de compression d\'images.', body_style))

story.append(Paragraph('L\'absence d\'une solution francaise equivalente constitue un avantage concurrentiel majeur. Les utilisateurs francophones doivent actuellement recourir a des solutions anglophones comme TinyPNG, Squoosh ou Compressor.io, sans possibilite d\'interface en francais ni de garantie de conformite RGPD. Cette lacune du marche represente une opportunite de positionnement strategique pour un acteur francais.', body_style))

story.append(PageBreak())

# ========== PHASE 2 ==========
story.append(Paragraph('<b>PHASE 2 - DECORTIQUER LE SAAS CIBLE</b>', h1_style))
story.append(Spacer(1, 16))

story.append(Paragraph('<b>2.1 Stack technique probable</b>', h2_style))
story.append(Paragraph('L\'analyse technique de TinyPNG revele une architecture relativement simple qui peut etre repliquee avec des outils gratuits. Le service repose sur un frontend minimaliste en HTML/CSS/JavaScript, avec un backend traitant les requetes de compression et une infrastructure de stockage temporaire pour les fichiers uploades.', body_style))

tech_data = [
    [Paragraph('<b>Composant</b>', table_header), Paragraph('<b>Technologie probable</b>', table_header), 
     Paragraph('<b>Complexite</b>', table_header)],
    [Paragraph('Frontend', table_cell), Paragraph('HTML5, CSS3, JavaScript vanilla', table_cell), 
     Paragraph('Faible', table_cell_center)],
    [Paragraph('Backend', table_cell), Paragraph('Python/Node.js avec ImageMagick', table_cell), 
     Paragraph('Moyenne', table_cell_center)],
    [Paragraph('API', table_cell), Paragraph('REST API pour integrations tierces', table_cell), 
     Paragraph('Moyenne', table_cell_center)],
    [Paragraph('Stockage', table_cell), Paragraph('Stockage temporaire + CDN', table_cell), 
     Paragraph('Faible', table_cell_center)],
    [Paragraph('Compression', table_cell), Paragraph('Algorithmes PNGQuant, MozJPEG', table_cell), 
     Paragraph('Moyenne', table_cell_center)],
]

t2 = Table(tech_data, colWidths=[3.5*cm, 6.5*cm, 3*cm])
t2.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t2)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 2 : Stack technique probable de TinyPNG</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>2.2 Fonctionnalites principales</b>', h2_style))
story.append(Paragraph('TinyPNG propose un ensemble de fonctionnalites ciblees repondant aux besoins specifiques de compression d\'images. L\'analyse detaillee de ces fonctionnalites permet d\'identifier les elements essentiels a reproduire pour le MVP (Minimum Viable Product) ainsi que les fonctionnalites secondaires pouvant etre ajoutees ulterieurement.', body_style))

story.append(Paragraph('<b>Fonctionnalites core (essentielles pour MVP)</b>', h3_style))
story.append(Paragraph('- <b>Compression PNG</b> : Reduction de la taille des fichiers PNG jusqu\'a 70% sans perte de qualite visible, utilisant l\'algorithme PNGQuant pour une compression intelligente.', bullet_style))
story.append(Paragraph('- <b>Compression JPEG</b> : Optimisation des fichiers JPEG avec l\'algorithme MozJPEG pour une compression efficace preservant la qualite photographique.', bullet_style))
story.append(Paragraph('- <b>Support WebP</b> : Conversion et compression vers le format WebP moderne, offrant des gains de taille supplementaires pour les sites web.', bullet_style))
story.append(Paragraph('- <b>Upload drag-and-drop</b> : Interface intuitive permettant le glisser-deposer de fichiers pour une experience utilisateur fluide.', bullet_style))
story.append(Paragraph('- <b>Traitement par lot</b> : Possibilite de compresser plusieurs images simultanement, jusqu\'a 20 fichiers en version gratuite.', bullet_style))

story.append(Paragraph('<b>Fonctionnalites secondaires (a developper ulterieurement)</b>', h3_style))
story.append(Paragraph('- <b>API pour developpeurs</b> : Acces programmatique au service de compression via une API REST avec documentation complete et exemples de code.', bullet_style))
story.append(Paragraph('- <b>Plugins WordPress/Shopify</b> : Extensions permettant d\'integrer directement la compression dans les workflows de publication de contenu.', bullet_style))
story.append(Paragraph('- <b>Compression video</b> : Extension du service aux formats video MP4, WebM pour une offre plus complete.', bullet_style))

story.append(Paragraph('<b>2.3 UX/UI : Points forts a reproduire</b>', h2_style))
story.append(Paragraph('L\'interface utilisateur de TinyPNG constitue un modele de simplicite et d\'efficacite. Plusieurs elements cles contribuent a son succes et doivent etre reproduits dans la version francaise pour garantir une adoption rapide par les utilisateurs.', body_style))

story.append(Paragraph('- <b>Design epure</b> : Interface minimaliste avec un focus total sur l\'action principale, sans element superflu pouvant distraire l\'utilisateur de son objectif de compression d\'images.', bullet_style))
story.append(Paragraph('- <b>Feedback visuel instantane</b> : Affichage en temps reel de la reduction de taille obtenue apres compression, avec un indicateur visuel du gain en pourcentage.', bullet_style))
story.append(Paragraph('- <b>Zero inscription requise</b> : Acces immediat a la fonctionnalite principale sans creer de compte, reduisant les freins a l\'adoption et encourageant les premiers essais.', bullet_style))
story.append(Paragraph('- <b>Telechargement direct</b> : Recuperation immediate des fichiers compresses sans etapes intermediaires, avec possibilite de telechargement individuel ou group en ZIP.', bullet_style))

story.append(Paragraph('<b>2.4 Modele de monetisation</b>', h2_style))
story.append(Paragraph('TinyPNG applique un modele freemium classique particulierement bien adapte au marche des outils en ligne. L\'analyse de ce modele permet de definir une strategie de monetisation similaire pour la version francaise, avec des ajustements pour le marche local.', body_style))

pricing_data = [
    [Paragraph('<b>Offre</b>', table_header), Paragraph('<b>Prix</b>', table_header), 
     Paragraph('<b>Limites</b>', table_header), Paragraph('<b>Fonctionnalites</b>', table_header)],
    [Paragraph('Gratuit', table_cell), Paragraph('0 EUR', table_cell_center), 
     Paragraph('20 images/jour', table_cell), Paragraph('Compression basique, 5MB max', table_cell)],
    [Paragraph('Pro', table_cell), Paragraph('25$/an', table_cell_center), 
     Paragraph('Illimite', table_cell), Paragraph('API, compression avancee, pas de pub', table_cell)],
    [Paragraph('Team', table_cell), Paragraph('50$/an', table_cell_center), 
     Paragraph('Illimite', table_cell), Paragraph('Collaboration, gestion equipe', table_cell)],
]

t3 = Table(pricing_data, colWidths=[2.5*cm, 2.5*cm, 3.5*cm, 5*cm])
t3.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t3)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 3 : Modele de tarification TinyPNG</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>2.5 Failles et lacunes a ameliorer</b>', h2_style))
story.append(Paragraph('L\'analyse de TinyPNG revele plusieurs lacunes que la version francaise pourrait exploiter pour se differencier sur le marche. Ces points d\'amelioration representent des opportunites de valeur ajoutee significatives pour les utilisateurs francophones.', body_style))

story.append(Paragraph('- <b>Absence de localisation francaise</b> : Interface uniquement en anglais, creant une barriere pour les utilisateurs non anglophones et une opportunite de differentiation majeure.', bullet_style))
story.append(Paragraph('- <b>Conformite RGPD non garantie</b> : Les donnees transite potentiellement par des serveurs americains, ce qui peut poser probleme pour les entreprises francaises soumises au RGPD.', bullet_style))
story.append(Paragraph('- <b>Pas de support client en francais</b> : Absence d\'assistance en francais pour les utilisateurs rencontrant des difficultes techniques.', bullet_style))
story.append(Paragraph('- <b>Interface datant</b> : Design fonctionnel mais ancien, laissant place a une experience utilisateur modernisee et plus attrayante.', bullet_style))
story.append(Paragraph('- <b>Pas d\'hebergement europeen</b> : Les donnees ne sont pas stockees en Europe, un point critique pour les entreprises ayant des exigences de souverainete numerique.', bullet_style))

story.append(PageBreak())

# ========== PHASE 3 ==========
story.append(Paragraph('<b>PHASE 3 - STACK CLONAGE A BUDGET ZERO</b>', h1_style))
story.append(Spacer(1, 16))

story.append(Paragraph('Cette section presente l\'ensemble des outils gratuits ou freemium suffisants pour cloner TinyPNG en version francaise. Chaque categorie est detaillee avec les options recommandees, leurs fonctionnalites et les limites eventuelles du plan gratuit.', body_style))

story.append(Paragraph('<b>3.1 Frontend / Site web</b>', h2_style))

frontend_data = [
    [Paragraph('<b>Outil</b>', table_header), Paragraph('<b>Lien</b>', table_header), 
     Paragraph('<b>Pourquoi</b>', table_header), Paragraph('<b>Gratuit ?</b>', table_header)],
    [Paragraph('Vercel', table_cell), Paragraph('vercel.com', table_cell), 
     Paragraph('Hebergement frontend React/Next.js gratuit, deploiement automatique via Git, CDN mondial inclus', table_cell), 
     Paragraph('Oui (100GB/mois)', table_cell_center)],
    [Paragraph('Figma', table_cell), Paragraph('figma.com', table_cell), 
     Paragraph('Conception UI/UX collaborative, prototypes interactifs, design system', table_cell), 
     Paragraph('Oui (3 projets)', table_cell_center)],
    [Paragraph('Tailwind CSS', table_cell), Paragraph('tailwindcss.com', table_cell), 
     Paragraph('Framework CSS utility-first, developpement rapide, personnalisation facile', table_cell), 
     Paragraph('Oui (open source)', table_cell_center)],
    [Paragraph('shadcn/ui', table_cell), Paragraph('ui.shadcn.com', table_cell), 
     Paragraph('Composants React accessibles, design moderne, personnalisation complete', table_cell), 
     Paragraph('Oui (open source)', table_cell_center)],
]

t4 = Table(frontend_data, colWidths=[2.5*cm, 3*cm, 6.5*cm, 2.5*cm])
t4.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t4)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 4 : Stack Frontend recommandee</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>3.2 Backend / Base de donnees</b>', h2_style))

backend_data = [
    [Paragraph('<b>Outil</b>', table_header), Paragraph('<b>Lien</b>', table_header), 
     Paragraph('<b>Pourquoi</b>', table_header), Paragraph('<b>Gratuit ?</b>', table_header)],
    [Paragraph('Supabase', table_cell), Paragraph('supabase.com', table_cell), 
     Paragraph('Alternative Firebase open-source, PostgreSQL heberge, authentification integree, stockage fichiers', table_cell), 
     Paragraph('Oui (500MB DB)', table_cell_center)],
    [Paragraph('Vercel Functions', table_cell), Paragraph('vercel.com', table_cell), 
     Paragraph('Fonctions serverless Node.js, integration frontend, deploiement simplifie', table_cell), 
     Paragraph('Oui (100GB/h)', table_cell_center)],
    [Paragraph('Cloudflare Workers', table_cell), Paragraph('workers.cloudflare.com', table_cell), 
     Paragraph('Edge computing, execution code proche utilisateur, basse latence', table_cell), 
     Paragraph('Oui (100K req/jour)', table_cell_center)],
]

t5 = Table(backend_data, colWidths=[3*cm, 3.5*cm, 5.5*cm, 2.5*cm])
t5.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t5)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 5 : Stack Backend recommandee</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>3.3 Authentification users</b>', h2_style))

auth_data = [
    [Paragraph('<b>Outil</b>', table_header), Paragraph('<b>Lien</b>', table_header), 
     Paragraph('<b>Pourquoi</b>', table_header), Paragraph('<b>Gratuit ?</b>', table_header)],
    [Paragraph('Clerk', table_cell), Paragraph('clerk.com', table_cell), 
     Paragraph('Auth moderne pour Next.js, composants prets a l\'emploi, gestion utilisateurs complete', table_cell), 
     Paragraph('Oui (5000 users)', table_cell_center)],
    [Paragraph('Auth.js', table_cell), Paragraph('authjs.dev', table_cell), 
     Paragraph('Solution open-source, OAuth (Google, GitHub), flexible et securise', table_cell), 
     Paragraph('Oui (illimite)', table_cell_center)],
    [Paragraph('Supabase Auth', table_cell), Paragraph('supabase.com', table_cell), 
     Paragraph('Inclus dans Supabase, OAuth, magic links, RLS PostgreSQL', table_cell), 
     Paragraph('Oui (inclus)', table_cell_center)],
]

t6 = Table(auth_data, colWidths=[3*cm, 3.5*cm, 5.5*cm, 2.5*cm])
t6.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t6)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 6 : Solutions d\'authentification recommandees</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>3.4 Fonctionnalite core - Moteur de compression</b>', h2_style))
story.append(Paragraph('Le coeur du service repose sur la compression d\'images. Plusieurs solutions open-source permettent d\'implementer cette fonctionnalite sans cout de licence. Le choix se porte sur une combinaison d\'outils complementaires offrant une compression optimale pour differents formats d\'images.', body_style))

core_data = [
    [Paragraph('<b>Outil</b>', table_header), Paragraph('<b>Format</b>', table_header), 
     Paragraph('<b>Pourquoi</b>', table_header), Paragraph('<b>Integration</b>', table_header)],
    [Paragraph('Sharp', table_cell), Paragraph('PNG/JPEG/WebP', table_cell), 
     Paragraph('Lib Node.js performante, compression multi-formats, redimensionnement', table_cell), 
     Paragraph('npm install sharp', table_cell)],
    [Paragraph('PNGQuant', table_cell), Paragraph('PNG', table_cell), 
     Paragraph('Meilleur ratio compression PNG, open-source, qualite preservee', table_cell), 
     Paragraph('CLI ou lib native', table_cell)],
    [Paragraph('MozJPEG', table_cell), Paragraph('JPEG', table_cell), 
     Paragraph('Compression JPEG avancee, optimise pour le web', table_cell), 
     Paragraph('via Sharp ou CLI', table_cell)],
    [Paragraph('Squoosh', table_cell), Paragraph('Multi-formats', table_cell), 
     Paragraph('Lib Google open-source, compression dans le navigateur possible', table_cell), 
     Paragraph('npm install @aspect/squoosh', table_cell)],
]

t7 = Table(core_data, colWidths=[2.5*cm, 3*cm, 5*cm, 4*cm])
t7.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t7)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 7 : Outils de compression d\'images</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>3.5 Paiement</b>', h2_style))

payment_data = [
    [Paragraph('<b>Outil</b>', table_header), Paragraph('<b>Lien</b>', table_header), 
     Paragraph('<b>Pourquoi</b>', table_header), Paragraph('<b>Frais</b>', table_header)],
    [Paragraph('Stripe', table_cell), Paragraph('stripe.com', table_cell), 
     Paragraph('Reference du marche, documentation excellente, dashboard complet', table_cell), 
     Paragraph('2.9% + 0.30EUR', table_cell_center)],
    [Paragraph('Lemon Squeezy', table_cell), Paragraph('lemonsqueezy.com', table_cell), 
     Paragraph('Gestion TVA automatique, ideal pour SaaS, pas de societe requise', table_cell), 
     Paragraph('5% + 0.50EUR', table_cell_center)],
    [Paragraph('PayPal', table_cell), Paragraph('paypal.com', table_cell), 
     Paragraph('Confiance utilisateurs, paiement instantane, large adoption', table_cell), 
     Paragraph('2.9% + 0.35EUR', table_cell_center)],
]

t8 = Table(payment_data, colWidths=[3*cm, 3.5*cm, 5.5*cm, 3*cm])
t8.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t8)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 8 : Solutions de paiement</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>3.6 Automatisation des taches repetitives</b>', h2_style))

auto_data = [
    [Paragraph('<b>Outil</b>', table_header), Paragraph('<b>Lien</b>', table_header), 
     Paragraph('<b>Usage</b>', table_header), Paragraph('<b>Gratuit ?</b>', table_header)],
    [Paragraph('n8n', table_cell), Paragraph('n8n.io', table_cell), 
     Paragraph('Workflows automation, auto-hebergeable, 200+ integrations', table_cell), 
     Paragraph('Oui (self-hosted)', table_cell_center)],
    [Paragraph('Zapier', table_cell), Paragraph('zapier.com', table_cell), 
     Paragraph('Integrations SaaS, workflows no-code, facile a configurer', table_cell), 
     Paragraph('Oui (100 tasks/mois)', table_cell_center)],
    [Paragraph('GitHub Actions', table_cell), Paragraph('github.com/features/actions', table_cell), 
     Paragraph('CI/CD integre, tests automatises, deploiement continu', table_cell), 
     Paragraph('Oui (2000 min/mois)', table_cell_center)],
]

t9 = Table(auto_data, colWidths=[2.5*cm, 4*cm, 5*cm, 3.5*cm])
t9.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t9)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 9 : Outils d\'automatisation</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>3.7 Hebergement</b>', h2_style))

hosting_data = [
    [Paragraph('<b>Outil</b>', table_header), Paragraph('<b>Type</b>', table_header), 
     Paragraph('<b>Limites gratuit</b>', table_header), Paragraph('<b>Avantage</b>', table_header)],
    [Paragraph('Vercel', table_cell), Paragraph('Frontend + Serverless', table_cell), 
     Paragraph('100GB bande passante/mois', table_cell), Paragraph('Ideal Next.js, zero config', table_cell)],
    [Paragraph('Cloudflare Pages', table_cell), Paragraph('Frontend + Functions', table_cell), 
     Paragraph('Illimite (fair use)', table_cell), Paragraph('CDN mondial rapide, DDoS protection', table_cell)],
    [Paragraph('Railway', table_cell), Paragraph('Backend + DB', table_cell), 
     Paragraph('5$ credit/mois', table_cell), Paragraph('Docker-ready, PostgreSQL inclus', table_cell)],
    [Paragraph('Supabase', table_cell), Paragraph('Database + Storage', table_cell), 
     Paragraph('500MB DB, 1GB stockage', table_cell), Paragraph('PostgreSQL, Auth, Storage integres', table_cell)],
]

t10 = Table(hosting_data, colWidths=[3*cm, 3.5*cm, 4*cm, 4.5*cm])
t10.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t10)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 10 : Solutions d\'hebergement gratuites</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>3.8 Considerations RGPD</b>', h2_style))
story.append(Paragraph('Chaque etape du developpement doit integrer les exigences du Reglement General sur la Protection des Donnees. L\'hebergement des donnees sur des serveurs europeens via Supabase (avec region EU) et Cloudflare (conforme RGPD) garantit la conformite reglementaire necessaire pour le marche francais.', body_style))

story.append(Paragraph('- <b>Stockage des donnees</b> : Utiliser les regions europeennes de Supabase (eu-west-1) pour garantir l\'hebergement des donnees en Europe.', bullet_style))
story.append(Paragraph('- <b>Consentement</b> : Implementer une banniere cookies conforme CNIL avec refus facilite.', bullet_style))
story.append(Paragraph('- <b>Droit a l\'oubli</b> : Prevoir la suppression automatique des fichiers apres traitement (24h max).', bullet_style))
story.append(Paragraph('- <b>Mentions legales</b> : Rediger des CGU et politique de confidentialite conformes au droit francais.', bullet_style))

story.append(PageBreak())

# ========== PHASE 4 ==========
story.append(Paragraph('<b>PHASE 4 - PLAN D\'EXECUTION SEMAINE PAR SEMAINE</b>', h1_style))
story.append(Spacer(1, 16))

story.append(Paragraph('<b>SEMAINE 1 : Setup infrastructure + maquette</b>', h2_style))

week1_data = [
    [Paragraph('<b>Jour</b>', table_header), Paragraph('<b>Taches</b>', table_header), 
     Paragraph('<b>Outils</b>', table_header), Paragraph('<b>Livrable</b>', table_header)],
    [Paragraph('Lundi', table_cell), Paragraph('Creation compte Vercel, Supabase, GitHub. Setup repo Next.js avec TypeScript et Tailwind.', table_cell), 
     Paragraph('Vercel, Supabase, GitHub', table_cell), Paragraph('Repo initialise', table_cell)],
    [Paragraph('Mardi', table_cell), Paragraph('Design UI/UX dans Figma : page d\'accueil, zone upload, resultats.', table_cell), 
     Paragraph('Figma', table_cell), Paragraph('Maquettes Figma', table_cell)],
    [Paragraph('Mercredi', table_cell), Paragraph('Developpement composants React : header, upload zone, footer.', table_cell), 
     Paragraph('VS Code, Tailwind, shadcn/ui', table_cell), Paragraph('Composants React', table_cell)],
    [Paragraph('Jeudi', table_cell), Paragraph('Configuration Supabase : database schema, storage buckets, auth settings.', table_cell), 
     Paragraph('Supabase Dashboard', table_cell), Paragraph('DB configuree', table_cell)],
    [Paragraph('Vendredi', table_cell), Paragraph('Tests integration frontend/backend. Deploiement preview sur Vercel.', table_cell), 
     Paragraph('Vercel CLI, Git', table_cell), Paragraph('Demo fonctionnelle', table_cell)],
]

t11 = Table(week1_data, colWidths=[2*cm, 5.5*cm, 3.5*cm, 4*cm])
t11.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t11)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 11 : Planning Semaine 1</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>Temps estime</b> : 3-4 heures par jour, soit 15-20 heures pour la semaine.', body_style))

story.append(Paragraph('<b>SEMAINE 2 : Developpement fonctionnalite core</b>', h2_style))

week2_data = [
    [Paragraph('<b>Jour</b>', table_header), Paragraph('<b>Taches</b>', table_header), 
     Paragraph('<b>Outils</b>', table_header), Paragraph('<b>Livrable</b>', table_header)],
    [Paragraph('Lundi', table_cell), Paragraph('Implementation upload fichiers : drag-drop, selection multiple, preview.', table_cell), 
     Paragraph('React Dropzone, TypeScript', table_cell), Paragraph('Upload fonctionnel', table_cell)],
    [Paragraph('Mardi', table_cell), Paragraph('Integration Sharp pour compression PNG/JPEG. Tests de qualite.', table_cell), 
     Paragraph('Sharp, Node.js', table_cell), Paragraph('Compression OK', table_cell)],
    [Paragraph('Mercredi', table_cell), Paragraph('Developpement API compression : endpoint POST, validation, stockage temporaire.', table_cell), 
     Paragraph('Next.js API Routes', table_cell), Paragraph('API operationnelle', table_cell)],
    [Paragraph('Jeudi', table_cell), Paragraph('Interface de resultats : affichage avant/apres, gain en pourcentage, download.', table_cell), 
     Paragraph('React, Tailwind', table_cell), Paragraph('UI resultats', table_cell)],
    [Paragraph('Vendredi', table_cell), Paragraph('Traitement par lot : compression multiple, download ZIP.', table_cell), 
     Paragraph('JSZip, FileSaver', table_cell), Paragraph('Batch OK', table_cell)],
]

t12 = Table(week2_data, colWidths=[2*cm, 5.5*cm, 3.5*cm, 4*cm])
t12.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t12)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 12 : Planning Semaine 2</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>Temps estime</b> : 4-5 heures par jour, soit 20-25 heures pour la semaine.', body_style))

story.append(Paragraph('<b>SEMAINE 3 : Integration + tests + traduction FR</b>', h2_style))

week3_data = [
    [Paragraph('<b>Jour</b>', table_header), Paragraph('<b>Taches</b>', table_header), 
     Paragraph('<b>Outils</b>', table_header), Paragraph('<b>Livrable</b>', table_header)],
    [Paragraph('Lundi', table_cell), Paragraph('Implementation authentification : inscription, connexion, OAuth Google.', table_cell), 
     Paragraph('Clerk ou Auth.js', table_cell), Paragraph('Auth fonctionnelle', table_cell)],
    [Paragraph('Mardi', table_cell), Paragraph('Tests unitaires et integration : Jest, Testing Library.', table_cell), 
     Paragraph('Jest, Vitest', table_cell), Paragraph('Tests verts', table_cell)],
    [Paragraph('Mercredi', table_cell), Paragraph('Traduction complete FR : interface, emails, erreurs. Fichiers i18n.', table_cell), 
     Paragraph('next-intl', table_cell), Paragraph('100% FR', table_cell)],
    [Paragraph('Jeudi', table_cell), Paragraph('Page pricing, FAQ, mentions legales, politique confidentialite RGPD.', table_cell), 
     Paragraph('MDX, Tailwind', table_cell), Paragraph('Pages legales', table_cell)],
    [Paragraph('Vendredi', table_cell), Paragraph('Tests utilisateur : correction bugs, optimisation performance.', table_cell), 
     Paragraph('Lighthouse, Chrome DevTools', table_cell), Paragraph('Score 90+ Lighthouse', table_cell)],
]

t13 = Table(week3_data, colWidths=[2*cm, 5.5*cm, 3.5*cm, 4*cm])
t13.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t13)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 13 : Planning Semaine 3</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>Temps estime</b> : 3-4 heures par jour, soit 15-20 heures pour la semaine.', body_style))

story.append(Paragraph('<b>SEMAINE 4 : Lancement MVP + premiers users</b>', h2_style))

week4_data = [
    [Paragraph('<b>Jour</b>', table_header), Paragraph('<b>Taches</b>', table_header), 
     Paragraph('<b>Outils</b>', table_header), Paragraph('<b>Livrable</b>', table_header)],
    [Paragraph('Lundi', table_cell), Paragraph('Configuration nom de domaine, SSL, analytics. Deploiement production.', table_cell), 
     Paragraph('Vercel, Google Analytics', table_cell), Paragraph('Site en ligne', table_cell)],
    [Paragraph('Mardi', table_cell), Paragraph('Creation contenu SEO : landing page, blog article, meta descriptions.', table_cell), 
     Paragraph('Figma, Markdown', table_cell), Paragraph('Contenu SEO', table_cell)],
    [Paragraph('Mercredi', table_cell), Paragraph('Integration Stripe pour paiements. Configuration webhooks.', table_cell), 
     Paragraph('Stripe Dashboard', table_cell), Paragraph('Paiements OK', table_cell)],
    [Paragraph('Jeudi', table_cell), Paragraph('Lancement : Product Hunt FR, LinkedIn, Twitter, Reddit r/SaaS.', table_cell), 
     Paragraph('Reseaux sociaux', table_cell), Paragraph('Premiers users', table_cell)],
    [Paragraph('Vendredi', table_cell), Paragraph('Collecte feedback utilisateurs. Iteration rapide sur points bloquants.', table_cell), 
     Paragraph('Hotjar, Formulaires', table_cell), Paragraph('Feedback recolte', table_cell)],
]

t14 = Table(week4_data, colWidths=[2*cm, 5.5*cm, 3.5*cm, 4*cm])
t14.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t14)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 14 : Planning Semaine 4</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>Temps estime</b> : 4-5 heures par jour, soit 20-25 heures pour la semaine.', body_style))

story.append(PageBreak())

# ========== QUICK START ==========
story.append(Paragraph('<b>QUICK START EN 3 ETAPES</b>', h1_style))
story.append(Spacer(1, 16))

story.append(Paragraph('<b>Etape 1 : Initialiser le projet (30 minutes)</b>', h2_style))
story.append(Paragraph('La premiere etape consiste a mettre en place l\'infrastructure de base du projet. Cette initialisation permet de disposer d\'un environnement de developpement fonctionnel en moins d\'une heure, pret a accueillir les premieres lignes de code.', body_style))

story.append(Paragraph('- Creer un compte GitHub et un repository pour le projet avec un README descriptif.', bullet_style))
story.append(Paragraph('- Creer un compte Vercel et connecter le repository GitHub pour le deploiement automatique.', bullet_style))
story.append(Paragraph('- Creer un compte Supabase et configurer un nouveau projet avec la region europeenne.', bullet_style))
story.append(Paragraph('- Initialiser le projet Next.js localement avec : npx create-next-app@latest --typescript --tailwind', bullet_style))

story.append(Paragraph('<b>Etape 2 : Implementer la compression (2-3 heures)</b>', h2_style))
story.append(Paragraph('La deuxieme etape se concentre sur le developpement de la fonctionnalite principale. L\'objectif est d\'obtenir un prototype fonctionnel capable de compresser une image en moins de 3 heures de travail.', body_style))

story.append(Paragraph('- Installer Sharp : npm install sharp', bullet_style))
story.append(Paragraph('- Creer une API Route /api/compress dans Next.js pour traiter les fichiers uploades.', bullet_style))
story.append(Paragraph('- Developper le composant d\'upload avec react-dropzone pour le glisser-deposer.', bullet_style))
story.append(Paragraph('- Tester la compression avec differentes images et ajuster les parametres de qualite.', bullet_style))

story.append(Paragraph('<b>Etape 3 : Lancer et promouvoir (1 jour)</b>', h2_style))
story.append(Paragraph('La troisieme etape correspond au lancement officiel du MVP. Cette phase critique determine la visibilite initiale du produit et l\'acquisition des premiers utilisateurs.', body_style))

story.append(Paragraph('- Deployer sur Vercel avec un nom de domaine personnalise.', bullet_style))
story.append(Paragraph('- Preparer un post de lancement pour Product Hunt, LinkedIn et Twitter.', bullet_style))
story.append(Paragraph('- Contacter des influenceurs tech francophones pour une premiere visibilite.', bullet_style))
story.append(Paragraph('- Collecter les premiers feedbacks et iterer rapidement sur les points bloquants.', bullet_style))

story.append(Spacer(1, 30))

# Recap table
story.append(Paragraph('<b>Recapitulatif de la stack</b>', h2_style))

recap_data = [
    [Paragraph('<b>Categorie</b>', table_header), Paragraph('<b>Outil recommande</b>', table_header), 
     Paragraph('<b>Cout</b>', table_header)],
    [Paragraph('Frontend', table_cell), Paragraph('Next.js + Tailwind + shadcn/ui', table_cell), 
     Paragraph('Gratuit', table_cell_center)],
    [Paragraph('Backend', table_cell), Paragraph('Vercel Functions + Supabase', table_cell), 
     Paragraph('Gratuit', table_cell_center)],
    [Paragraph('Authentification', table_cell), Paragraph('Clerk', table_cell), 
     Paragraph('Gratuit (5000 users)', table_cell_center)],
    [Paragraph('Compression', table_cell), Paragraph('Sharp (Node.js)', table_cell), 
     Paragraph('Gratuit (open source)', table_cell_center)],
    [Paragraph('Paiement', table_cell), Paragraph('Stripe', table_cell), 
     Paragraph('Payant a l\'usage', table_cell_center)],
    [Paragraph('Hebergement', table_cell), Paragraph('Vercel + Cloudflare', table_cell), 
     Paragraph('Gratuit', table_cell_center)],
    [Paragraph('Automatisation', table_cell), Paragraph('GitHub Actions', table_cell), 
     Paragraph('Gratuit (2000 min/mois)', table_cell_center)],
]

t15 = Table(recap_data, colWidths=[4*cm, 6*cm, 4*cm])
t15.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, 1), colors.white),
    ('BACKGROUND', (0, 2), (-1, 2), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 3), (-1, 3), colors.white),
    ('BACKGROUND', (0, 4), (-1, 4), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 5), (-1, 5), colors.white),
    ('BACKGROUND', (0, 6), (-1, 6), colors.HexColor('#F5F5F5')),
    ('BACKGROUND', (0, 7), (-1, 7), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(t15)
story.append(Spacer(1, 6))
story.append(Paragraph('<i>Tableau 15 : Recapitulatif complet de la stack technique</i>', 
    ParagraphStyle('Caption', fontName='SimHei', fontSize=9, alignment=TA_CENTER)))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>Cout total du projet : 0 EUR</b> (hors frais de domaine optionnel, environ 10-15 EUR/an)', 
    ParagraphStyle('Highlight', fontName='Microsoft YaHei', fontSize=14, alignment=TA_CENTER, textColor=colors.HexColor('#1F4E79'))))

# Build PDF
doc.build(story)
print(f"PDF generated: {output_path}")
