import { Header, Footer, Chatbot } from '@/components'

const PrincipalLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default PrincipalLayout