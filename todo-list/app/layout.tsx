import '../styles/globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className=' bg-grey'>
        <div className=' px-14 py-14 bg-blue text-center'>
          <h2 className='text-white text-4xl font-bold'>😆 To Do List</h2>
          <p className=' text-white text-3xl'>Mau ngapain hari ini</p>
        </div>
        {children}
        <div className='text-center py-4'>
          <p className=' text-grey-footer'>@magistraapta - 2022</p>
        </div>
        </body>
    </html>
  )
}
