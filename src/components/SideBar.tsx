
import { GenreResponseProps } from "../@types/genreResponseInterface";
import { Button } from "./Button";

export const SideBar = (props:{genres: GenreResponseProps[],selectedGenreId:number, handleClickButton: Function}) => {
  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>
    <div className="buttons-container">
      {props.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>);
}