import './globals.css'


export const metadata = {
  title: 'اسنپ مارکت',
  description: 'خرید آنلاین و سفارش اینترنتی لبنیات، گوشت قرمز، میوه و سبزیجات و موادغذایی از‌هایپر استارها و‌هایپر‌مارکت‌های آنلاین تهران و‌هایپر استار کرج (اکومال) و اصفهان و قم | سوپرمارکت انلاین اسنپ مارکت',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  )
}
