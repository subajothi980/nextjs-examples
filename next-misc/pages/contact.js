import Footer from "@/components/Footer";

function Contact(){
    return <div className="content">Contact Us</div>
}
export default Contact;

Contact.getLayout = function PageLayout(page){
    return (<>
    {page}
    <Footer />
    </>);
}