// PURE CLE
export const Card = (...content)=>(

  { div: {

    class: $ => css(`
      width: 200px;
      height: 200px;
      overflow: auto;

      background-color: white;
      padding: 25px; 
      border-radius: 10px; 

      -webkit-box-shadow: 0px 6px 32px -1px rgb(0 0 0 / 20%);
      -moz-box-shadow: 0px 6px 32px -1px rgb(0 0 0 / 20%);
      box-shadow: 0px 6px 32px -1px rgb(0 0 0 / 20%);
    `),

    '=>': [
      ...content
    ]

}})