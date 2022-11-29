import { storiesModel } from "../../helper/model/storiesModel";

const Stories = () => {
    return(
        <div className="stories">
            <div className="story">
                <img src={storiesModel[0].img} />
                <span>{storiesModel[0].name}</span>
                <button>+</button>
            </div>
            {
                storiesModel.map((story) => (
                    <div className="story" key={story.id}>
                        <img src={story.img} />
                        <span>{story.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Stories;