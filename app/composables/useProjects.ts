export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: string
  image: string
  /** รูปหลัก (Hero) ด้านบน */
  gallery?: string[]
  /** รูปในส่วน "ภาพตัวอย่าง" ด้านล่าง (คลิกขยายได้) */
  descriptionImages?: { src: string, caption?: string }[]
  /** รูปประกอบในส่วนอธิบายโปรเจกต์ (ระหว่างข้อความกับ Gallery) */
  technologies?: string[]
  features?: string[]
  link?: string
  featured: boolean
  client?: string
  year?: string
  duration?: string
  customContent?: {
    type: 'html' | 'component' | 'video' | 'timeline' | 'testimonials'
    data?: unknown
    html?: string
  }
}

export const useProjects = () => {
  const projectsData: Omit<Project, 'link'>[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'ระบบร้านค้าออนไลน์ที่ครบวงจร พร้อมระบบชำระเงินและจัดการสินค้า',
      longDescription: 'พัฒนาเว็บแอปพลิเคชัน E-Commerce ที่ทันสมัยและใช้งานง่าย ประกอบด้วยหน้าร้านและแสดงสินค้าตามหมวดหมู่ ระบบตะกร้าสินค้าและ Checkout ระบบชำระเงินออนไลน์หลายช่องทาง ระบบจัดการออเดอร์และสต็อก และ Dashboard สำหรับผู้ดูแลระบบพร้อมรายงานยอดขายแบบ Real-time',
      category: 'เว็บแอปพลิเคชัน',
      image: '/images/portfolio/Ecommerceappwebapp/ecommerwebapphome.png',
      gallery: [
        '/images/portfolio/Ecommerceappwebapp/ecommerwebapphome.png',
        '/images/portfolio/Ecommerceappwebapp/ecommerwebapp.png',
        '/images/portfolio/Ecommerceappwebapp/ecommersecrch.png',
        '/images/portfolio/Ecommerceappwebapp/ecommershoppingcart.png',
        '/images/portfolio/Ecommerceappwebapp/ecommercerCheckout.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/Ecommerceappwebapp/ecommerwebapphome.png', caption: 'หน้าหลัก / หน้าร้าน' },
        { src: '/images/portfolio/Ecommerceappwebapp/ecommerwebapp.png', caption: 'เว็บแอปพลิเคชัน' },
        { src: '/images/portfolio/Ecommerceappwebapp/ecommersecrch.png', caption: 'ค้นหาสินค้า' },
        { src: '/images/portfolio/Ecommerceappwebapp/ecommershoppingcart.png', caption: 'ตะกร้าสินค้า' },
        { src: '/images/portfolio/Ecommerceappwebapp/ecommercerCheckout.png', caption: 'ชำระเงิน / Checkout' }
      ],
      features: [
        'หน้าร้านและแสดงสินค้าตามหมวดหมู่',
        'ระบบตะกร้าสินค้าและ Checkout',
        'ชำระเงินออนไลน์หลายช่องทาง',
        'ระบบจัดการออเดอร์และสต็อก',
        'รายงานยอดขายแบบ Real-time',
        'Dashboard สำหรับผู้ดูแลระบบ'
      ],
      client: 'บริษัท ABC จำกัด',
      year: '2024',
      duration: '3 เดือน',
      featured: true
    },
    {
      id: 'n8n',
      title: 'n8n Workflow Automation',
      description: 'ระบบ Automation และ Workflow ด้วย n8n เชื่อมต่อระบบต่างๆ อัตโนมัติ เช่น อีเมล Google Sheet Line Notify',
      longDescription: 'ออกแบบและพัฒนา Workflow ด้วย n8n สำหรับเชื่อมต่อแอปและบริการต่างๆ ให้ทำงานอัตโนมัติ ลดงานซ้ำ รองรับการดึงข้อมูล ส่งการแจ้งเตือน สร้างรายงาน และเชื่อม API ตามความต้องการของธุรกิจ',
      category: 'Workflow Automation',
      image: '/images/portfolio/n8n/n8n11.png',
      gallery: [
        '/images/portfolio/n8n/n8n1.png',
        '/images/portfolio/n8n/n8n2.png',
        '/images/portfolio/n8n/n8n3.png',
        '/images/portfolio/n8n/n8n4.png',
        '/images/portfolio/n8n/n8n5.png',
        '/images/portfolio/n8n/n8n6.png',
        '/images/portfolio/n8n/n8n7.png',
        '/images/portfolio/n8n/n8n8.png',
        '/images/portfolio/n8n/n8n10.png',
        '/images/portfolio/n8n/n8n11.png',
        '/images/portfolio/n8n/n8n12.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/n8n/n8n1.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n2.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n3.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n4.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n5.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n6.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n7.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n8.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n10.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n11.png', caption: 'Workflow' },
        { src: '/images/portfolio/n8n/n8n12.png', caption: 'Workflow' }
      ],
      features: [
        'ออกแบบ Workflow ตามความต้องการ',
        'เชื่อมต่ออีเมล Google Sheet API ต่างๆ',
        'ส่งการแจ้งเตือน (Line Notify, Slack, อีเมล)',
        'ดึงข้อมูลและประมวลผลอัตโนมัติ',
        'Self-hosted หรือ Cloud ได้ตามความเหมาะสม'
      ],
      client: 'ไม่ระบุ',
      year: '2024',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: 'uiwebmodel',
      title: 'UIwebmodel',
      description: 'ออกแบบ UI/UX โมเดลเว็บ เน้นโครงสร้างและองค์ประกอบสำหรับเว็บไซต์',
      longDescription: 'ผลงานออกแบบ User Interface และ User Experience สำหรับโมเดลเว็บ เน้นโครงสร้างหน้า การนำทาง และองค์ประกอบที่ใช้ร่วมกันในเว็บไซต์ พร้อม Wireframe และ Prototype',
      category: 'UX/UI',
      image: '/images/portfolio/UIwebmodel/Novahome.png',
      gallery: [
        '/images/portfolio/UIwebmodel/Novahome.png',
        '/images/portfolio/UIwebmodel/Novanew.png',
        '/images/portfolio/UIwebmodel/Novatwo.png',
        '/images/portfolio/UIwebmodel/Novathree.png',
        '/images/portfolio/UIwebmodel/Novafive.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/UIwebmodel/Novahome.png', caption: 'UIwebmodel' },
        { src: '/images/portfolio/UIwebmodel/Novanew.png', caption: 'UIwebmodel' },
        { src: '/images/portfolio/UIwebmodel/Novatwo.png', caption: 'UIwebmodel' },
        { src: '/images/portfolio/UIwebmodel/Novathree.png', caption: 'UIwebmodel' },
        { src: '/images/portfolio/UIwebmodel/Novafive.png', caption: 'UIwebmodel' }
      ],
      features: [
        'ออกแบบ UI/UX โมเดลเว็บ',
        'Wireframe และ Prototype',
        'Design System และ Component',
        'Responsive และ Accessibility'
      ],
      client: 'ไม่ระบุ',
      year: '2024',
      duration: 'ไม่ระบุ',
      featured: false
    },
    {
      id: 'ui-1',
      title: 'UI 1',
      description: 'ชุดออกแบบ UI/UX ชุดที่ 1 สำหรับเว็บและแอป เน้นความทันสมัยและใช้งานง่าย',
      longDescription: 'ผลงานออกแบบ User Interface และ User Experience ชุดที่ 1 ครอบคลุมหน้าจอหลัก การนำทาง และองค์ประกอบสำคัญ เน้นความสวยงามและประสบการณ์ผู้ใช้ที่ลื่นไหล',
      category: 'UX/UI',
      image: '/images/portfolio/UI/001.png',
      gallery: [
        '/images/portfolio/UI/001.png',
        '/images/portfolio/UI/002.png',
        '/images/portfolio/UI/003.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/UI/001.png', caption: 'ออกแบบ UI 1' },
        { src: '/images/portfolio/UI/002.png', caption: 'ออกแบบ UI 1' },
        { src: '/images/portfolio/UI/003.png', caption: 'ออกแบบ UI 1' }
      ],
      features: [
        'ออกแบบ UI/UX สำหรับเว็บและแอป',
        'Wireframe และ Prototype',
        'Responsive Design'
      ],
      client: 'ไม่ระบุ',
      year: '2024',
      duration: 'ไม่ระบุ',
      featured: false
    },
    {
      id: 'ui-2',
      title: 'UI 2',
      description: 'ชุดออกแบบ UI/UX ชุดที่ 2 เน้นความสวยงามและความเหมาะสมกับการใช้งาน',
      longDescription: 'ผลงานออกแบบ User Interface และ User Experience ชุดที่ 2 เน้นการจัดวางองค์ประกอบ สี และ Typography ที่อ่านง่ายและสอดคล้องกับแบรนด์',
      category: 'UX/UI',
      image: '/images/portfolio/UI2/0001.png',
      gallery: [
        '/images/portfolio/UI2/0001.png',
        '/images/portfolio/UI2/0002.png',
        '/images/portfolio/UI2/0003.png',
        '/images/portfolio/UI2/0004.png',
        '/images/portfolio/UI2/0005.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/UI2/0001.png', caption: 'ออกแบบ UI 2' },
        { src: '/images/portfolio/UI2/0002.png', caption: 'ออกแบบ UI 2' },
        { src: '/images/portfolio/UI2/0003.png', caption: 'ออกแบบ UI 2' },
        { src: '/images/portfolio/UI2/0004.png', caption: 'ออกแบบ UI 2' },
        { src: '/images/portfolio/UI2/0005.png', caption: 'ออกแบบ UI 2' }
      ],
      features: [
        'ออกแบบ UI/UX สำหรับเว็บและแอป',
        'Design System และ Component',
        'Accessibility'
      ],
      client: 'ไม่ระบุ',
      year: '2024',
      duration: 'ไม่ระบุ',
      featured: false
    },
    {
      id: 'wordpress',
      title: 'WordPress Website',
      description: 'เว็บบริษัท ข่าว บล็อก โปรโมทด้วย WordPress แก้ไขเนื้อหาเองได้ ใช้งานง่าย',
      longDescription: 'พัฒนาเว็บไซต์ด้วย WordPress สำหรับเว็บบริษัท ข่าวสาร บล็อก หรือโปรโมทธุรกิจ ลูกค้าแก้ไขเนื้อหาเองได้ผ่านหลังบ้าน ใช้งานง่าย รองรับมือถือและ SEO',
      category: 'เว็บไซต์',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop'
      ],
      descriptionImages: [
        { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', caption: 'เว็บ WordPress' },
        { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop', caption: 'หลังบ้านแก้ไขเนื้อหา' }
      ],
      features: [
        'เว็บบริษัท / ข่าว / บล็อก',
        'แก้ไขเนื้อหาเองได้ (CMS)',
        'ธีมรองรับมือถือ',
        'SEO พื้นฐาน'
      ],
      client: 'ไม่ระบุ',
      year: '2024',
      duration: 'ไม่ระบุ',
      featured: false
    },
    {
      id: '2',
      title: 'Corporate Website',
      description: 'เว็บไซต์บริษัทที่ทันสมัย พร้อมระบบจัดการเนื้อหาและ SEO',
      longDescription: 'ออกแบบและพัฒนาเว็บไซต์บริษัทที่สวยงามและทันสมัย พร้อมระบบจัดการเนื้อหา (CMS) ที่ใช้งานง่าย มีการออกแบบให้รองรับ SEO เพื่อให้ติดอันดับใน Search Engine ได้ดี และรองรับการแสดงผลบนทุกอุปกรณ์',
      category: 'เว็บไซต์',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'
      ],
      features: [
        'ระบบจัดการเนื้อหา (CMS)',
        'SEO Optimized',
        'Responsive Design',
        'Fast Loading',
        'Contact Form',
        'Blog System'
      ],
      client: 'บริษัท XYZ จำกัด',
      year: '2024',
      duration: '2 เดือน',
      featured: true
    },
    {
      id: '3',
      title: 'Dashboard System',
      description: 'ระบบ Dashboard สำหรับจัดการข้อมูลและรายงานแบบ Real-time',
      category: 'เว็บแอปพลิเคชัน',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '4',
      title: 'Landing Page',
      description: 'Landing Page ที่สวยงามและมีประสิทธิภาพสำหรับโปรโมทผลิตภัณฑ์',
      category: 'เว็บไซต์',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '5',
      title: 'Mobile Web App',
      description: 'เว็บแอปพลิเคชันที่รองรับทุกอุปกรณ์ พร้อม PWA support',
      category: 'เว็บแอปพลิเคชัน',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: '6',
      title: 'Blog Platform',
      description: 'แพลตฟอร์มบล็อกที่ทันสมัย พร้อมระบบจัดการเนื้อหา',
      category: 'เว็บไซต์',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 'solar',
      title: 'เว็บไซต์พลังงานแสงอาทิตย์',
      description: 'เว็บไซต์แนะนำระบบโซลาร์เซลล์และพลังงานแสงอาทิตย์ พร้อมคำนวณต้นทุนและประหยัดค่าไฟ',
      longDescription: 'ออกแบบและพัฒนาเว็บไซต์เกี่ยวกับพลังงานแสงอาทิตย์และระบบโซลาร์เซลล์ ประกอบด้วยข้อมูลผลิตภัณฑ์ แผงโซลาร์ อินเวอร์เตอร์ ระบบกักเก็บพลังงาน เคสศึกษาลูกค้า เครื่องคำนวณประหยัดค่าไฟ และฟอร์มขอใบเสนอราคา รองรับการแสดงผลบนมือถือและ SEO',
      category: 'เว็บไซต์',
      image: '/images/portfolio/solar/jdoubleohome.JPG',
      gallery: [
        '/images/portfolio/solar/jdoubleotwo.JPG',
        '/images/portfolio/solar/jdoubleothree.JPG',
        '/images/portfolio/solar/jdoubleofore.JPG'
      ],
      descriptionImages: [
        { src: '/images/portfolio/solar/jdoubleotwo.JPG', caption: 'ตัวอย่างการติดตั้งแผงโซลาร์บนหลังคา' },
        { src: '/images/portfolio/solar/jdoubleothree.JPG', caption: 'ระบบอินเวอร์เตอร์และ monitoring' }
      ],
      features: [
        'แนะนำระบบโซลาร์เซลล์และอุปกรณ์',
        'เครื่องคำนวณประหยัดค่าไฟและคืนทุน',
        'เคสศึกษาและผลงานติดตั้ง',
        'ฟอร์มขอใบเสนอราคาและติดต่อ',
        'Responsive Design รองรับทุกอุปกรณ์',
        'SEO สำหรับคำค้นพลังงานแสงอาทิตย์'
      ],
      client: 'ลูกค้าภาคพลังงานสะอาด',
      year: '2024',
      duration: '2 เดือน',
      featured: true
    },
    {
      id: 'jsanner',
      title: 'Jsanner',
      description: 'เว็บแอปพลิเคชันหรือระบบ Jsanner พัฒนาตามความต้องการของลูกค้า',
      longDescription: 'โปรเจกต์ Jsanner ออกแบบและพัฒนาเพื่อตอบโจทย์การใช้งาน สามารถปรับรายละเอียด คำอธิบาย และรูปภาพได้ในไฟล์ useProjects.ts',
      category: 'เว็บแอปพลิเคชัน',
      image: '/images/portfolio/jsanner/home.png',
      gallery: [
        '/images/portfolio/jsanner/home.png',
        '/images/portfolio/jsanner/Dashbord.png',
        '/images/portfolio/jsanner/OrderPicking.png',
        '/images/portfolio/jsanner/Delivery.png',
        '/images/portfolio/jsanner/itemSearch.png',
        '/images/portfolio/jsanner/itemSearchnew.png',
        '/images/portfolio/jsanner/ItemSeaeh3.png',
        '/images/portfolio/jsanner/Itemsearchfour.png',
        '/images/portfolio/jsanner/search.png',
        '/images/portfolio/jsanner/Stockcount.png',
        '/images/portfolio/jsanner/Stockcountadd.png',
        '/images/portfolio/jsanner/Putaway.png',
        '/images/portfolio/jsanner/Goodreceipt.png',
        '/images/portfolio/jsanner/Replenishment.png',
        '/images/portfolio/jsanner/ReturnMgdetail.png',
        '/images/portfolio/jsanner/ReturnMgdetailtwo.png',
        '/images/portfolio/jsanner/ReturnMgnagementthree.png',
        '/images/portfolio/jsanner/AuditLog.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/jsanner/Dashbord.png', caption: 'Dashboard' },
        { src: '/images/portfolio/jsanner/OrderPicking.png', caption: 'Order Picking' },
        { src: '/images/portfolio/jsanner/Delivery.png', caption: 'Delivery' },
        { src: '/images/portfolio/jsanner/itemSearch.png', caption: 'Item Search' },
        { src: '/images/portfolio/jsanner/Stockcount.png', caption: 'Stock Count' },
        { src: '/images/portfolio/jsanner/Putaway.png', caption: 'Putaway' },
        { src: '/images/portfolio/jsanner/Goodreceipt.png', caption: 'Good Receipt' },
        { src: '/images/portfolio/jsanner/Replenishment.png', caption: 'Replenishment' },
        { src: '/images/portfolio/jsanner/ReturnMgdetail.png', caption: 'Return Management' },
        { src: '/images/portfolio/jsanner/AuditLog.png', caption: 'Audit Log' }
      ],
      features: [
        'Dashboard และรายงาน',
        'Order Picking',
        'Delivery และ Good Receipt',
        'Item Search',
        'Stock Count / Putaway / Replenishment',
        'Return Management',
        'Audit Log',
        'Responsive Design'
      ],
      client: 'ไม่ระบุ',
      year: '2024',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: '7',
      title: 'Product Launch Video',
      description: 'วิดีโอโปรโมทผลิตภัณฑ์ใหม่ พร้อม Motion Graphics และ Sound Design',
      category: 'วิดีโอ',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: '8',
      title: 'Corporate Video',
      description: 'วิดีโอแนะนำบริษัท พร้อม Animation และ Background Music',
      category: 'วิดีโอ',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '9',
      title: 'Logo Animation',
      description: 'Animation Logo สำหรับ Brand Identity ที่สวยงามและน่าสนใจ',
      category: 'วิดีโอ',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: '11',
      title: 'Product Photo Retouching',
      description: 'ตัดต่อและปรับแต่งรูปภาพสินค้าให้สวยงาม พร้อม Background Replacement',
      category: 'รูปภาพ',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: '12',
      title: 'Portrait Enhancement',
      description: 'Retouch และปรับแต่งรูปภาพ Portrait ให้สวยงามและเป็นธรรมชาติ',
      category: 'รูปภาพ',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '13',
      title: 'Photo Composite',
      description: 'สร้างภาพ Composite ที่สวยงามจากการรวมหลายภาพเข้าด้วยกัน',
      category: 'รูปภาพ',
      image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '14',
      title: 'Restaurant Website',
      description: 'เว็บไซต์ร้านอาหารที่สวยงาม พร้อมระบบจองโต๊ะและเมนูออนไลน์',
      category: 'เว็บไซต์',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '15',
      title: 'Real Estate Website',
      description: 'เว็บไซต์อสังหาริมทรัพย์ พร้อมระบบค้นหาและกรองทรัพย์สิน',
      category: 'เว็บไซต์',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '16',
      title: 'Fitness Center Website',
      description: 'เว็บไซต์ฟิตเนส พร้อมระบบจองคลาสและติดตามความคืบหน้า',
      category: 'เว็บไซต์',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '17',
      title: 'Online Learning Platform',
      description: 'แพลตฟอร์มเรียนออนไลน์ พร้อมระบบวิดีโอและแบบทดสอบ',
      category: 'เว็บแอปพลิเคชัน',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: '18',
      title: 'Project Management System',
      description: 'ระบบจัดการโปรเจกต์ที่ครบวงจร พร้อม Kanban Board และ Timeline',
      category: 'เว็บแอปพลิเคชัน',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '19',
      title: 'CRM System',
      description: 'ระบบจัดการลูกค้าและติดตามการขายที่ครบวงจร',
      category: 'เว็บแอปพลิเคชัน',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 'aichatbot',
      title: 'AIChatbot ผู้ช่วยช่าง',
      description: 'เว็บแอป Full Stack สำหรับช่าง บันทึกงานรายวัน อัปโหลดรูป ถาม–ตอบกับ AI เรื่องงานซ่อม จัดการโปรเจค และสร้างรายงาน/ประมาณราคา',
      longDescription: 'ระบบช่วยช่างทำงานประจำวัน รองรับการบันทึกงานและอัปโหลดรูป (ก่อน–หลัง) ใช้ AI เป็นที่ปรึกษาปัญหาช่างและวิธีซ่อม จัดการโปรเจคและติดตามความคืบหน้า สร้างรายงานและประมาณราคาจากงานและวัสดุ',
      category: 'เว็บแอปพลิเคชัน',
      image: '/images/portfolio/AIChatbot/home.png',
      gallery: [
        '/images/portfolio/AIChatbot/home.png',
        '/images/portfolio/AIChatbot/loginchatbot.png',
        '/images/portfolio/AIChatbot/creatjob.png',
        '/images/portfolio/AIChatbot/createjob.png',
        '/images/portfolio/AIChatbot/createjobth.png',
        '/images/portfolio/AIChatbot/EditJob.png',
        '/images/portfolio/AIChatbot/chatbotnew.png',
        '/images/portfolio/AIChatbot/chatbottwo.png',
        '/images/portfolio/AIChatbot/addchat.png',
        '/images/portfolio/AIChatbot/addeditchat.png',
        '/images/portfolio/AIChatbot/aichatbotedit.png',
        '/images/portfolio/AIChatbot/chat3.png',
        '/images/portfolio/AIChatbot/chatm.png',
        '/images/portfolio/AIChatbot/timeline.png',
        '/images/portfolio/AIChatbot/checkdate.png',
        '/images/portfolio/AIChatbot/timeobject.png',
        '/images/portfolio/AIChatbot/jobdetail.png',
        '/images/portfolio/AIChatbot/detailjobs.png',
        '/images/portfolio/AIChatbot/jobtech.png',
        '/images/portfolio/AIChatbot/project.png',
        '/images/portfolio/AIChatbot/producttwo.png',
        '/images/portfolio/AIChatbot/productthree.png',
        '/images/portfolio/AIChatbot/editproduct.png',
        '/images/portfolio/AIChatbot/Report.png',
        '/images/portfolio/AIChatbot/chart.png',
        '/images/portfolio/AIChatbot/chartone.png',
        '/images/portfolio/AIChatbot/testchartm.png',
        '/images/portfolio/AIChatbot/detailbils.png',
        '/images/portfolio/AIChatbot/bile.png',
        '/images/portfolio/AIChatbot/equipment.png',
        '/images/portfolio/AIChatbot/sleeporder.png',
        '/images/portfolio/AIChatbot/tax.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/AIChatbot/loginchatbot.png', caption: 'เข้าสู่ระบบแชทบอท' },
        { src: '/images/portfolio/AIChatbot/creatjob.png', caption: 'สร้างงาน/บันทึกงานรายวัน' },
        { src: '/images/portfolio/AIChatbot/createjob.png', caption: 'ฟอร์มสร้างงาน' },
        { src: '/images/portfolio/AIChatbot/createjobth.png', caption: 'สร้างงาน (TH)' },
        { src: '/images/portfolio/AIChatbot/EditJob.png', caption: 'แก้ไขงาน' },
        { src: '/images/portfolio/AIChatbot/chatbotnew.png', caption: 'AI Chatbot ผู้ช่วยช่าง' },
        { src: '/images/portfolio/AIChatbot/chatbottwo.png', caption: 'แชทบอท' },
        { src: '/images/portfolio/AIChatbot/addchat.png', caption: 'เพิ่มแชท' },
        { src: '/images/portfolio/AIChatbot/addeditchat.png', caption: 'เพิ่ม/แก้ไขแชท' },
        { src: '/images/portfolio/AIChatbot/aichatbotedit.png', caption: 'แก้ไข AIChatbot' },
        { src: '/images/portfolio/AIChatbot/chat3.png', caption: 'แชท' },
        { src: '/images/portfolio/AIChatbot/chatm.png', caption: 'แชท (Mobile)' },
        { src: '/images/portfolio/AIChatbot/timeline.png', caption: 'ไทม์ไลน์งาน' },
        { src: '/images/portfolio/AIChatbot/checkdate.png', caption: 'ตรวจสอบวันที่' },
        { src: '/images/portfolio/AIChatbot/timeobject.png', caption: 'เวลาและวัตถุงาน' },
        { src: '/images/portfolio/AIChatbot/jobdetail.png', caption: 'รายละเอียดงาน' },
        { src: '/images/portfolio/AIChatbot/detailjobs.png', caption: 'รายการงาน' },
        { src: '/images/portfolio/AIChatbot/jobtech.png', caption: 'งานช่างเทคนิค' },
        { src: '/images/portfolio/AIChatbot/project.png', caption: 'จัดการโปรเจคและความคืบหน้า' },
        { src: '/images/portfolio/AIChatbot/producttwo.png', caption: 'สินค้า/วัสดุ' },
        { src: '/images/portfolio/AIChatbot/productthree.png', caption: 'สินค้า' },
        { src: '/images/portfolio/AIChatbot/editproduct.png', caption: 'แก้ไขสินค้า' },
        { src: '/images/portfolio/AIChatbot/Report.png', caption: 'รายงานและประมาณราคา' },
        { src: '/images/portfolio/AIChatbot/chart.png', caption: 'กราฟและสถิติ' },
        { src: '/images/portfolio/AIChatbot/chartone.png', caption: 'กราฟ' },
        { src: '/images/portfolio/AIChatbot/testchartm.png', caption: 'กราฟทดสอบ' },
        { src: '/images/portfolio/AIChatbot/detailbils.png', caption: 'รายละเอียดบิล' },
        { src: '/images/portfolio/AIChatbot/bile.png', caption: 'บิล' },
        { src: '/images/portfolio/AIChatbot/equipment.png', caption: 'อุปกรณ์' },
        { src: '/images/portfolio/AIChatbot/sleeporder.png', caption: 'สั่งซื้อ/รายการ' },
        { src: '/images/portfolio/AIChatbot/tax.png', caption: 'ภาษี' }
      ],
      features: [
        'บันทึกการทำงานรายวัน (รวมรูปก่อน–หลัง)',
        'ถาม–ตอบกับ AI เกี่ยวกับปัญหาช่าง/วิธีซ่อม',
        'จัดการโปรเจคและติดตามความคืบหน้า',
        'สร้างรายงานและประมาณราคาจากงานและวัสดุ',
        'ไทม์ไลน์และปฏิทินงาน',
        'Dashboard และกราฟสรุป'
      ],
      client: 'ไม่ระบุ',
      year: '2025',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: 'repairsystem',
      title: 'Repairsystem (ระบบแจ้งซ่อม)',
      description: 'ระบบแจ้งซ่อมครบวงจร จัดการอุปกรณ์ แจ้งซ่อม มอบหมายช่าง และติดตามสถานะ',
      longDescription: 'พัฒนาเว็บแอปพลิเคชันระบบแจ้งซ่อมสำหรับองค์กร รองรับการจัดการอาคาร แผนก อุปกรณ์ พนักงานและช่างเทคนิค ระบบสิทธิ์ (Role) แอดมิน สร้างรายงานและส่งออก (Export) ได้',
      category: 'เว็บแอปพลิเคชัน',
      image: '/images/portfolio/Repairsystem/dashboard.png',
      gallery: [
        '/images/portfolio/Repairsystem/dashboard.png',
        '/images/portfolio/Repairsystem/login.png',
        '/images/portfolio/Repairsystem/Repairmenu.png',
        '/images/portfolio/Repairsystem/building.png',
        '/images/portfolio/Repairsystem/department.png',
        '/images/portfolio/Repairsystem/Managedevices.png',
        '/images/portfolio/Repairsystem/employee.png',
        '/images/portfolio/Repairsystem/Technician.png',
        '/images/portfolio/Repairsystem/manager.png',
        '/images/portfolio/Repairsystem/adminmember.png',
        '/images/portfolio/Repairsystem/role.png',
        '/images/portfolio/Repairsystem/data.png',
        '/images/portfolio/Repairsystem/Export.png',
        '/images/portfolio/Repairsystem/ExportReport.png',
        '/images/portfolio/Repairsystem/leve.png',
        '/images/portfolio/Repairsystem/employeetwo.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/Repairsystem/login.png', caption: 'เข้าสู่ระบบ' },
        { src: '/images/portfolio/Repairsystem/Repairmenu.png', caption: 'เมนูแจ้งซ่อม' },
        { src: '/images/portfolio/Repairsystem/building.png', caption: 'จัดการอาคาร' },
        { src: '/images/portfolio/Repairsystem/department.png', caption: 'แผนก' },
        { src: '/images/portfolio/Repairsystem/Managedevices.png', caption: 'จัดการอุปกรณ์' },
        { src: '/images/portfolio/Repairsystem/Technician.png', caption: 'ช่างเทคนิค' },
        { src: '/images/portfolio/Repairsystem/manager.png', caption: 'ผู้จัดการ' },
        { src: '/images/portfolio/Repairsystem/adminmember.png', caption: 'สมาชิกแอดมิน' },
        { src: '/images/portfolio/Repairsystem/role.png', caption: 'บทบาทและสิทธิ์' },
        { src: '/images/portfolio/Repairsystem/ExportReport.png', caption: 'ส่งออกรายงาน' }
      ],
      features: [
        'แจ้งซ่อมและติดตามสถานะ',
        'จัดการอาคาร แผนก อุปกรณ์',
        'จัดการพนักงานและช่างเทคนิค',
        'ระบบบทบาทและสิทธิ์ (Role)',
        'Dashboard และรายงาน',
        'ส่งออกรายงาน (Export)'
      ],
      client: 'ไม่ระบุ',
      year: '2025',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: 'ecommerceapp',
      title: 'E-Commerce App',
      description: 'แอปพลิเคชัน E-Commerce สำหรับร้านค้าออนไลน์ รองรับหลายอุปกรณ์และหน้าจอ',
      longDescription: 'แอปซื้อขายออนไลน์ที่ออกแบบให้ใช้งานได้ทั้งบนมือถือและแท็บเล็ต รองรับการแสดงผลบน iPhone และ Android พร้อมระบบสินค้า ตะกร้า และชำระเงิน',
      category: 'แอปพลิเคชัน',
      image: '/images/portfolio/ecommerceapp/iPhone13PROone.webp',
      gallery: [
        '/images/portfolio/ecommerceapp/iPhone13PROone.webp',
        '/images/portfolio/ecommerceapp/iPhone13PROtwo.webp',
        '/images/portfolio/ecommerceapp/iPhone13PROonethree.webp',
        '/images/portfolio/ecommerceapp/GalaxyS21.webp',
        '/images/portfolio/ecommerceapp/GalaxyS21Ultra.webp',
        '/images/portfolio/ecommerceapp/GalaxyS21Ultranew.webp'
      ],
      descriptionImages: [
        { src: '/images/portfolio/ecommerceapp/iPhone13PROone.webp', caption: 'iPhone 13 Pro' },
        { src: '/images/portfolio/ecommerceapp/iPhone13PROtwo.webp', caption: 'iPhone 13 Pro' },
        { src: '/images/portfolio/ecommerceapp/iPhone13PROonethree.webp', caption: 'iPhone 13 Pro' },
        { src: '/images/portfolio/ecommerceapp/GalaxyS21.webp', caption: 'Galaxy S21' },
        { src: '/images/portfolio/ecommerceapp/GalaxyS21Ultra.webp', caption: 'Galaxy S21 Ultra' },
        { src: '/images/portfolio/ecommerceapp/GalaxyS21Ultranew.webp', caption: 'Galaxy S21 Ultra' }
      ],
      features: [
        'รองรับ iPhone และ Android',
        'หน้าสินค้าและตะกร้า',
        'ระบบชำระเงิน',
        'Responsive หลายขนาดจอ'
      ],
      client: 'ไม่ระบุ',
      year: '2025',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: 'smartfarm',
      title: 'SmartFarm',
      description: 'แอปพลิเคชันฟาร์มอัจฉริยะ สำหรับติดตามและจัดการการเกษตร สภาพแวดล้อม และข้อมูลฟาร์ม',
      longDescription: 'ระบบแอปพลิเคชันช่วยจัดการฟาร์ม รองรับการติดตามสภาพดิน น้ำ อากาศ การแจ้งเตือน และรายงานผลผลิต เหมาะสำหรับเกษตรกรและฟาร์มสมัยใหม่',
      category: 'แอปพลิเคชัน',
      image: '/images/portfolio/SmartFarm/home.webp',
      gallery: [
        '/images/portfolio/SmartFarm/home.webp',
        '/images/portfolio/SmartFarm/index.webp',
        '/images/portfolio/SmartFarm/add.webp',
        '/images/portfolio/SmartFarm/edit.webp',
        '/images/portfolio/SmartFarm/detail.webp',
        '/images/portfolio/SmartFarm/setting.webp'
      ],
      descriptionImages: [
        { src: '/images/portfolio/SmartFarm/home.webp', caption: 'หน้าหลัก' },
        { src: '/images/portfolio/SmartFarm/index.webp', caption: 'รายการ' },
        { src: '/images/portfolio/SmartFarm/add.webp', caption: 'เพิ่มข้อมูล' },
        { src: '/images/portfolio/SmartFarm/edit.webp', caption: 'แก้ไข' },
        { src: '/images/portfolio/SmartFarm/detail.webp', caption: 'รายละเอียด' },
        { src: '/images/portfolio/SmartFarm/setting.webp', caption: 'ตั้งค่า' }
      ],
      features: [
        'ติดตามสภาพดิน น้ำ อากาศ',
        'แจ้งเตือนและรายงาน',
        'จัดการข้อมูลฟาร์ม',
        'Dashboard และสถิติ',
        'รองรับมือถือและแท็บเล็ต'
      ],
      client: 'ไม่ระบุ',
      year: '2025',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: 'veloledger',
      title: 'Veloledger',
      description: 'แอปพลิเคชัน Veloledger สำหรับจัดการและติดตามงาน รองรับการแสดงผลบน iPhone และ Android',
      longDescription: 'ระบบแอปที่ออกแบบสำหรับการจัดการและติดตามงาน แสดงผลได้บนหลายอุปกรณ์ พร้อมหน้าจอหลัก รายการ สลิป และการตั้งค่าต่างๆ',
      category: 'แอปพลิเคชัน',
      image: '/images/portfolio/Veloledger/iPhone13PROnew.webp',
      gallery: [
        '/images/portfolio/Veloledger/Veloledgerone.webp',
        '/images/portfolio/Veloledger/Veloledgertwo.webp',
        '/images/portfolio/Veloledger/Veloledgerthree.webp',
        '/images/portfolio/Veloledger/Veloledgerfour.webp',
        '/images/portfolio/Veloledger/Veloledgerfive.webp',
        '/images/portfolio/Veloledger/Veloledgersix.webp',
        '/images/portfolio/Veloledger/Veloledgerthen.webp',
        '/images/portfolio/Veloledger/Veloledgeronenew.webp',
        '/images/portfolio/Veloledger/Veloledgeronening.webp',
        '/images/portfolio/Veloledger/Veloledgeronejoop.webp',
        '/images/portfolio/Veloledger/Veloledgeroneeleven.webp',
        '/images/portfolio/Veloledger/app.webp',
        '/images/portfolio/Veloledger/iPhone13app.webp',
        '/images/portfolio/Veloledger/iPhone13PROnew.webp',
        '/images/portfolio/Veloledger/iPhone13PROvVeloledger.webp',
        '/images/portfolio/Veloledger/iPhonePro.webp',
        '/images/portfolio/Veloledger/slip.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/Veloledger/Veloledgerone.webp', caption: 'Veloledger' },
        { src: '/images/portfolio/Veloledger/Veloledgertwo.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgerthree.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgerfour.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgerfive.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgersix.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgerthen.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgeronenew.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgeronening.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgeronejoop.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/Veloledgeroneeleven.webp', caption: 'หน้าจอ' },
        { src: '/images/portfolio/Veloledger/app.webp', caption: 'แอป' },
        { src: '/images/portfolio/Veloledger/iPhone13app.webp', caption: 'iPhone 13' },
        { src: '/images/portfolio/Veloledger/iPhone13PROnew.webp', caption: 'iPhone 13 Pro' },
        { src: '/images/portfolio/Veloledger/iPhone13PROvVeloledger.webp', caption: 'iPhone 13 Pro - Veloledger' },
        { src: '/images/portfolio/Veloledger/iPhonePro.webp', caption: 'iPhone Pro' },
        { src: '/images/portfolio/Veloledger/slip.png', caption: 'สลิป' }
      ],
      features: [
        'จัดการและติดตามงาน',
        'รองรับ iPhone และ Android',
        'หน้าหลักและรายการ',
        'สลิปและรายงาน'
      ],
      client: 'ไม่ระบุ',
      year: '2025',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: '24',
      title: 'YouTube Promo Video',
      description: 'วิดีโอโปรโมทสำหรับ YouTube Channel พร้อม Animation และ Effects',
      category: 'วิดีโอ',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '25',
      title: 'Event Highlight Video',
      description: 'วิดีโอสรุปงานอีเวนต์ พร้อม Music และ Fast-paced Editing',
      category: 'วิดีโอ',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '26',
      title: 'Tutorial Video Series',
      description: 'ชุดวิดีโอสอนใช้งาน พร้อม Screen Recording และ Voice Over',
      category: 'วิดีโอ',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '27',
      title: 'Wedding Video',
      description: 'วิดีโอแต่งงานที่โรแมนติก พร้อม Color Grading และ Background Music',
      category: 'วิดีโอ',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: '28',
      title: 'Fashion Photo Editing',
      description: 'ตัดต่อและปรับแต่งรูปภาพแฟชั่น พร้อม Retouching และ Color Grading',
      category: 'รูปภาพ',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '29',
      title: 'Real Estate Photography',
      description: 'ตัดต่อรูปภาพอสังหาริมทรัพย์ พร้อม HDR และ Sky Replacement',
      category: 'รูปภาพ',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '30',
      title: 'Food Photography',
      description: 'ตัดต่อรูปภาพอาหารให้ดูน่ารับประทาน พร้อม Color Enhancement',
      category: 'รูปภาพ',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '31',
      title: 'Event Photography',
      description: 'ตัดต่อรูปภาพงานอีเวนต์ พร้อม Batch Processing และ Color Correction',
      category: 'รูปภาพ',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 'booking',
      title: 'Booking',
      description: 'ระบบจองออนไลน์ สำหรับจองบริการ คอร์ส หรือห้องพัก พร้อมปฏิทินและจัดการการจอง',
      longDescription: 'พัฒนาเว็บแอปพลิเคชันระบบจองออนไลน์ที่ใช้งานง่าย รองรับการจองแบบ Real-time มีปฏิทินแสดงวันว่าง ระบบแจ้งเตือน และจัดการการจองได้ครบวงจร เหมาะกับธุรกิจบริการ คลินิก โรงแรม สตูดิโอ และคอร์สเรียน',
      category: 'เว็บแอปพลิเคชัน',
      image: '/images/portfolio/booking/home.png',
      gallery: [
        '/images/portfolio/booking/home.png',
        '/images/portfolio/booking/selectservice.png',
        '/images/portfolio/booking/selecttherapit.png',
        '/images/portfolio/booking/selecttime.png',
        '/images/portfolio/booking/datebooking.png',
        '/images/portfolio/booking/Datafrom.png',
        '/images/portfolio/booking/service.png',
        '/images/portfolio/booking/Bookbank.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/booking/selectservice.png', caption: 'เลือกบริการ' },
        { src: '/images/portfolio/booking/selecttherapit.png', caption: 'เลือกนักบำบัด' },
        { src: '/images/portfolio/booking/selecttime.png', caption: 'เลือกวันและเวลา' },
        { src: '/images/portfolio/booking/datebooking.png', caption: 'วันที่จอง' },
        { src: '/images/portfolio/booking/Datafrom.png', caption: 'แบบฟอร์มข้อมูล' },
        { src: '/images/portfolio/booking/service.png', caption: 'บริการ' },
        { src: '/images/portfolio/booking/Bookbank.png', caption: 'ชำระผ่านธนาคาร' }
      ],
      features: [
        'ระบบจองออนไลน์แบบ Real-time',
        'ปฏิทินแสดงวันและเวลาว่าง',
        'จัดการการจอง ยกเลิก และเปลี่ยนเวลา',
        'แจ้งเตือนทางอีเมลหรือ SMS',
        'Dashboard สำหรับผู้ดูแลระบบ',
        'รองรับหลายบริการ/หลายสาขา'
      ],
      client: 'ไม่ระบุ',
      year: '2025',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: 'reserveasportsstadium',
      title: 'Reserve a Sports Stadium',
      description: 'ระบบจองสนามกีฬาออนไลน์ เลือกวันเวลา สนาม และจัดการการจองได้ครบวงจร',
      longDescription: 'พัฒนาเว็บแอปพลิเคชันสำหรับจองสนามกีฬา รองรับการเลือกวัน-เวลา การจองหลายรอบ (sessions) หน้าจอสำหรับผู้ใช้และแอดมินจัดการการจอง โปรโมชัน และการจองใหม่',
      category: 'เว็บแอปพลิเคชัน',
      image: '/images/portfolio/Reserveasportsstadium/home.png',
      gallery: [
        '/images/portfolio/Reserveasportsstadium/home.png',
        '/images/portfolio/Reserveasportsstadium/newbooking.png',
        '/images/portfolio/Reserveasportsstadium/bookingsessions.png',
        '/images/portfolio/Reserveasportsstadium/admin.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/Reserveasportsstadium/newbooking.png', caption: 'จองใหม่' },
        { src: '/images/portfolio/Reserveasportsstadium/bookingsessions.png', caption: 'รอบการจอง' },
        { src: '/images/portfolio/Reserveasportsstadium/admin.png', caption: 'หน้าจอแอดมิน' }
      ],
      features: [
        'จองสนามกีฬาออนไลน์',
        'เลือกวันเวลาและรอบการจอง',
        'จัดการการจองและโปรโมชัน',
        'Dashboard สำหรับแอดมิน'
      ],
      client: 'ไม่ระบุ',
      year: '2025',
      duration: 'ไม่ระบุ',
      featured: true
    },
    {
      id: 'reserveatentsite',
      title: 'Reserve a Tent Site',
      description: 'ระบบจองพื้นที่ตั้งเต็นท์ เลือกโซน วันที่ และจัดการการจองค่ายพักแรม',
      longDescription: 'พัฒนาเว็บแอปพลิเคชันสำหรับจองพื้นที่ตั้งเต็นท์หรือค่ายพักแรม รองรับการดูการจองของฉัน (My Book)  playbook โปรโมชัน และหน้าหลักที่ใช้งานง่าย',
      category: 'เว็บแอปพลิเคชัน',
      image: '/images/portfolio/Reserveatentsite/home.png',
      gallery: [
        '/images/portfolio/Reserveatentsite/home.png',
        '/images/portfolio/Reserveatentsite/Mybook.png',
        '/images/portfolio/Reserveatentsite/playbook.png',
        '/images/portfolio/Reserveatentsite/promotion.png'
      ],
      descriptionImages: [
        { src: '/images/portfolio/Reserveatentsite/Mybook.png', caption: 'การจองของฉัน' },
        { src: '/images/portfolio/Reserveatentsite/playbook.png', caption: 'Playbook' },
        { src: '/images/portfolio/Reserveatentsite/promotion.png', caption: 'โปรโมชัน' }
      ],
      features: [
        'จองพื้นที่ตั้งเต็นท์ออนไลน์',
        'การจองของฉัน (My Book)',
        'Playbook และโปรโมชัน',
        'รองรับหลายโซนและวันที่'
      ],
      client: 'ไม่ระบุ',
      year: '2025',
      duration: 'ไม่ระบุ',
      featured: true
    }
    // === เทมเพลตเพิ่มโปรเจกต์ใหม่: คัดลอกบล็อกด้านล่าง ลบคอมเมนต์ แล้วแก้ค่าให้ตรงกับโปรเจกต์ ===
    // {
    //   id: 'โปรเจกต์ใหม่',           // ต้องไม่ซ้ำกับ id อื่น ใช้ใน URL /portfolio/[id]
    //   title: 'ชื่อโปรเจกต์',
    //   description: 'คำอธิบายสั้นๆ',
    //   longDescription: 'คำอธิบายยาว (ถ้ามี) แสดงในหน้ารายละเอียด',
    //   category: 'เว็บไซต์',        // หรือ 'เว็บแอปพลิเคชัน', 'วิดีโอ', 'รูปภาพ'
    //   image: '/images/portfolio/โฟลเดอร์/รูปหลัก.jpg',
    //   gallery: ['/images/portfolio/โฟลเดอร์/รูป1.jpg', '/images/portfolio/โฟลเดอร์/รูป2.jpg'],
    //   descriptionImages: [
    //     { src: '/images/portfolio/โฟลเดอร์/รูป1.jpg', caption: 'คำบรรยายรูป' }
    //   ],
    //
    //   features: ['ฟีเจอร์ 1', 'ฟีเจอร์ 2'],
    //   client: 'ชื่อลูกค้า',
    //   year: '2025',
    //   duration: '2 เดือน',
    //   featured: true               // true = แสดงใน "ผลงานเด่น"
    // }
  ]

  const projects = computed<Project[]>(() => {
    return projectsData.map(project => ({
      ...project,
      link: `/portfolio/${project.id}`
    }))
  })

  const getProjectById = (id: string): Project | undefined => {
    return projects.value.find(p => String(p.id) === String(id))
  }

  return {
    projects,
    getProjectById
  }
}
