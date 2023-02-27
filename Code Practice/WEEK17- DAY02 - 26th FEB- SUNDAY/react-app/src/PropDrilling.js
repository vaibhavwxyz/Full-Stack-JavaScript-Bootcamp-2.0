import React from "react";

function Grandparent(props) {
  return (
    <div>
      <Parent1 data={props.data} />
      <Parent2 data={props.data} />
    </div>
  );
}

function Parent1(props) {
  return <Child1 data={props.data} />;
}

function Parent2(props) {
  return <Child2 data={props.data} />;
}

function Child1(props) {
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
}

function Child2(props) {
  return (
    <div>
      <h2>{props.data}</h2>
    </div>
  );
}

function myCust() {
  return <Grandparent data="Hello, world!" />;
}

export default myCust;
