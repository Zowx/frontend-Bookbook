import Navbar from "../Components/NavBar";
import CreateBookForm from "../Components/CreateBookForm";
import Footer from "../Components/Footer";

const CreateBookPage = () => {
    return (
        <div>
            <Navbar />
            
            {/* d-flex align-items-center justify-content-center */}
            <div className="d-flex align-items-center justify-content-center mt-8">
                <CreateBookForm />
            </div>
            <Footer/>
        </div>
    )
}

export default CreateBookPage;