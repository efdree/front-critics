import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGame } from "../services/games-service";
import FormGame from "../components/FormGame";
import UploadImages from "../services/cloudinary-service.js";

function NewGame() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    release_date: "",
    rating: 99,
    category: 1,
    parent_id: 1,
    cover:
      "https://res.cloudinary.com/dw4vczbtg/image/upload/v1678591335/app_offix/Cover_qvq7q3.png",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const [image, setImage] = useState("");

  function handleUploadImage(event) {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "mxhekubc");
    UploadImages(data).then((data) => setImage(data.secure_url));
  }

  function handleSubmit(event) {
    event.preventDefault();
    formData.avatar = image;
    createGame(formData);
    navigate(`/`);
  }

  return (
    <FormGame
      title={"New Game"}
      onSubmit={handleSubmit}
      handleChange={handleChange}
      placeholderName={"Secret planning"}
      inputName={formData.name}
      placeholderSummary={"This is the best department yet..."}
      inputSummary={formData.summary}
      placeholderRating={"0.0"}
      inputRating={formData.rating}
      placeholderReleaseDate={""}
      inputReleaseDate={formData.release_date}
      selectCategory={formData.category}
      selectOption={<option value="0">{"No Parent"}</option>}
      selectParentId={formData.parent_id}
      onChangeFile={handleUploadImage}
      submit={"Create Game"}
    />
  );
}

export default NewGame;
