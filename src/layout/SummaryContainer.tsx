import '@/styles/globals.css';

const SummaryContainer = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='example'>
        {children}
    </div>
  )
}

export default SummaryContainer