import Navbar from "../Components/NavBar";
import CreateBookForm from "../Components/CreateBookForm";

const CreateBookPage = () => {
    return (
        <div>
            <Navbar />
            
            {/* d-flex align-items-center justify-content-center */}
            <div className="d-flex align-items-center justify-content-center mt-8">
                <CreateBookForm />
            </div>
        </div>
    )
}

export default CreateBookPage;