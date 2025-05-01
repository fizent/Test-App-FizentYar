export default function TextImage({title, image, description}) {
    return(
        <div className="container_textimage">
            <div className="title_box_text_by_image">
                <h2 className="title_box_by">{title}</h2>
                <p>{description}</p>
            </div>
            <img className="image_text_width" src={image} alt="" />
        </div>
    )
}