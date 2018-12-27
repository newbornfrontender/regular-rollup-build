const template = document.createElement('template');

template.innerHTML = `
  <style>
    h1 {
      color: green;

      & span {
        color: red;
      }
    }
  </style>

  <h1>Hello <span>world</span>!</h1>
`;
