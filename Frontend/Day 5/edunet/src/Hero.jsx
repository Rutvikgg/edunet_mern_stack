function Hero(props) {
  return (
    <div>
      Hero, {props.obj.name} is {props.obj.age} years old. Has hobbies like,
      {props.obj.hobbies} living in {props.obj.address.city},{" "}
      {props.obj.address.state}, {props.obj.address.country}
    </div>
  );
}

export default Hero;
