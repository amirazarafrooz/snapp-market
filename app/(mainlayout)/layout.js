import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";


export default function MainLayout ({children}) {
    return (<section>
        <Header layout={'sublayout'}/>
        <div>{children}</div>
        <Footer/>
    </section>
    );
}