import style from "./style.css";
import logo from "../img/logo.svg";
import img1 from "../img/img1.svg";
import img2 from "../img/img2.svg";
import img3 from "../img/img3.svg";

function Content() {
  return (
    <div className="container">
      <div className="logo">
        <img className="icon" src={logo} alt="this" />
      </div>
      <div className="desciption">
        <h1>Lorem ipsum dolor sit asmet?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="post-container">
        <div className="post">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="img">
            <img className="icon" src={img1} alt="this" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </p>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
        <div className="post">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="img">
            <img className="icon" src={img2} alt="this" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </p>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
        <div className="post">
          <h1>Lorem ipsum dolor sit amet</h1>
          <div className="img">
            <img className="icon" src={img3} alt="this" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at
            </p>
          </div>
          <p>
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
            ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices
            vestibulum mattis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
