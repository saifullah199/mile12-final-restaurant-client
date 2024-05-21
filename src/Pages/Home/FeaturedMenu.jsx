import SectionTitle from "../../Components/SectionTitle";
import featuredimg from "../../assets/home/featured.jpg"
import './Featured.css'
const FeaturedMenu = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item">

            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-8 px-16">
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase"> Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat non eveniet vel molestiae, ut similique temporibus optio ipsum praesentium commodi autem laboriosam unde quasi reprehenderit! Officiis numquam nemo blanditiis voluptas at molestias nulla dolor tenetur labore, vitae cupiditate expedita odit rem cumque ipsa illo necessitatibus minus corporis enim eum.
                         </p>
                    <button className="btn btn-outline border-0 border-b-4"> Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMenu;