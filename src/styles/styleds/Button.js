
import styled from "styled-components";

const sizeStyles = {
  sd: { padding: ".2rem .5rem", borderRadius: "5px", borderWidth: "1px" },
  md: { padding: ".5rem .7rem", borderRadius: "10px", borderWidth: "1.5px" },
  lg: { padding: "1rem 1.2rem", borderRadius: "15px", borderWidth: "2px" },
  bg: { padding: "1.2rem 1.5rem", borderRadius: "20px", borderWidth: "2.5px" },
};

const colorStyles = {
  primary: { background: "#1E90FF", color: "#000000" },
  error: { background: "#f03535", color: "#000000" },
  success: { background: "#1eff00", color: "#000000" },
  warning: { background: "#fdf902", color: "#000000" },
};

const getStyle = ({ cor, size, brd }) => {
  const { padding, borderRadius, borderWidth } = sizeStyles[size] || {};
  const { background, color } = colorStyles[cor] || { background: "#fdfdfd", color: "#333333" };

  return `
    padding: ${padding || "0.5rem 1rem"};
    border-radius: ${borderRadius || "5px"};
    background: ${background};
    color: ${color};
    ${brd ? `border: ${borderWidth || "1px"} solid` : "border: none"};
  `;
};


const Button = styled.button`
  border: none;
  cursor: pointer;
  ${({ cor, size, brd }) => getStyle({ cor, size, brd })}
`;

export default Button;


// const getStyle = (cor, size, rmd, brd) => {
//   // para cor primary
//   if (cor === 'primary') {
//     if ( size !== null) {
//       if ( rmd !== null) {
//         if ( brd !== null) {
//           if ( size === 'sd') {
//             return `
//               border: 1px solid;  
//               border-radius: 5px;
//               padding: .2rem .5rem;
//               background: #1E90FF;
//               color: #000000;
//             `;
//           } else if ( size === 'md') {
//             return `
//               border: 1.5px solid;
//               border-radius: 10px;          
//               padding: .5rem .7rem;
//               background: #1E90FF;
//               color: #000000;
//             `;
//           } else if ( size === 'lg') {
//             return `
//               border: 2px solid;
//               border-radius: 15px;
//               padding: 1rem 1.2rem;
//               background: #1E90FF;
//               color: #000000;
//             `;
//           } else if ( size === 'bg') {
//             return `
//               border: 2.5px solid;
//               border-radius: 20px;
//               padding: 1.2rem 1.5rem;
//               background: #1E90FF;
//               color: #000000;
//             `;
//           };
//         } else if ( size === 'sd') {
//           return `
//             border: none;
//             border-radius: 5px;
//             padding: .2rem .5rem;
//             background: #1E90FF;
//             color: #000000;
//           `;
//         } else if ( size === 'md') {
//           return `
//             border: none;
//             border-radius: 10px;          
//             padding: .5rem .7rem;
//             background: #1E90FF;
//             color: #000000;
//           `;
//         } else if ( size === 'lg') {
//           return `
//             border: none;
//             border-radius: 15px;
//             padding: 1rem 1.2rem;
//             background: #1E90FF;
//             color: #000000;
//           `;
//         } else if ( size === 'bg') {
//           return `
//             border: none;
//             border-radius: 20px;
//             padding: 1.2rem 1.5rem;
//             background: #1E90FF;
//             color: #000000;
//           `;
//         };
//       } else {  
//          if ( size === 'sd') {
//           return `
//           padding: .2rem .5rem;
//           background: #1E90FF;
//           color: #000000;
//         `;
//       } else if ( size === 'md') {
//         return `
//           padding: .5rem .7rem;
//           background: #1E90FF;
//           color: #000000;
//         `;
//       } else if ( size === 'lg') {
//         return `
//           padding: 1rem 1.2rem;
//           background: #1E90FF;
//           color: #000000;
//         `;
//       } else if ( size === 'bg') {
//         return `
//           padding: 1.2rem 1.5rem;
//           background: #1E90FF;
//           color: #000000;
//         `;
//       } else {
//         return `
//           background: #1E90FF;
//           color: #000000;
//         `;
//       };
//     };
//   };
//   // para cor error
//   if (cor === 'error') {
//     if ( size !== null) {
//       if ( rmd !== null) {
//         if ( brd !== null) {
//           if ( size === 'sd') {
//             return `
//               border: 1px solid;  
//               border-radius: 5px;
//               padding: .2rem .5rem;
//               background: #f03535;
//               color: #000000;
//             `;
//           } else if ( size === 'md') {
//             return `
//               border: 1.5px solid;
//               border-radius: 10px;          
//               padding: .5rem .7rem;
//               background: #f03535;
//               color: #000000;
//             `;
//           } else if ( size === 'lg') {
//             return `
//               border: 2px solid;
//               border-radius: 15px;
//               padding: 1rem 1.2rem;
//               background: #f03535;
//               color: #000000;
//             `;
//           } else if ( size === 'bg') {
//             return `
//               border: 2.5px solid;
//               border-radius: 20px;
//               padding: 1.2rem 1.5rem;
//               background: #f03535;
//               color: #000000;
//             `;
//           };
//         } else if ( size === 'sd') {
//           return `
//             border: none;
//             border-radius: 5px;
//             padding: .2rem .5rem;
//             background: #f03535;
//             color: #000000;
//           `;
//         } else if ( size === 'md') {
//           return `
//             border: none;
//             border-radius: 10px;          
//             padding: .5rem .7rem;
//             background: #f03535;
//             color: #000000;
//           `;
//         } else if ( size === 'lg') {
//           return `
//             border: none;
//             border-radius: 15px;
//             padding: 1rem 1.2rem;
//             background: #f03535;
//             color: #000000;
//           `;
//         } else if ( size === 'bg') {
//           return `
//             border: none;
//             border-radius: 20px;
//             padding: 1.2rem 1.5rem;
//             background: #f03535;
//             color: #000000;
//           `;
//         };
//       } else {  
//          if ( size === 'sd') {
//           return `
//           padding: .2rem .5rem;
//           background: #f03535;
//           color: #000000;
//         `;
//       } else if ( size === 'md') {
//         return `
//           padding: .5rem .7rem;
//           background: #f03535;
//           color: #000000;
//         `;
//       } else if ( size === 'lg') {
//         return `
//           padding: 1rem 1.2rem;
//           background: #f03535;
//           color: #000000;
//         `;
//       } else if ( size === 'bg') {
//         return `
//           padding: 1.2rem 1.5rem;
//           background: #f03535;
//           color: #000000;
//         `;
//       } else {
//         return `
//           background: #f03535;
//           color: #000000;
//         `;
//       };
//     };
//   };
//   // cor succsses
//   if (cor === 'succsses') {
//     if ( size !== null) {
//       if ( rmd !== null) {
//         if ( brd !== null) {
//           if ( size === 'sd') {
//             return `
//               border: 1px solid;  
//               border-radius: 5px;
//               padding: .2rem .5rem;
//               background: #1eff00;
//               color: #000000;
//             `;
//           } else if ( size === 'md') {
//             return `
//               border: 1.5px solid;
//               border-radius: 10px;          
//               padding: .5rem .7rem;
//               background: #1eff00;
//               color: #000000;
//             `;
//           } else if ( size === 'lg') {
//             return `
//               border: 2px solid;
//               border-radius: 15px;
//               padding: 1rem 1.2rem;
//               background: #1eff00;
//               color: #000000;
//             `;
//           } else if ( size === 'bg') {
//             return `
//               border: 2.5px solid;
//               border-radius: 20px;
//               padding: 1.2rem 1.5rem;
//               background: #1eff00;
//               color: #000000;
//             `;
//           };
//         } else if ( size === 'sd') {
//           return `
//             border: none;
//             border-radius: 5px;
//             padding: .2rem .5rem;
//             background: #1eff00;
//             color: #000000;
//           `;
//         } else if ( size === 'md') {
//           return `
//             border: none;
//             border-radius: 10px;          
//             padding: .5rem .7rem;
//             background: #1eff00;
//             color: #000000;
//           `;
//         } else if ( size === 'lg') {
//           return `
//             border: none;
//             border-radius: 15px;
//             padding: 1rem 1.2rem;
//             background: #1eff00;
//             color: #000000;
//           `;
//         } else if ( size === 'bg') {
//           return `
//             border: none;
//             border-radius: 20px;
//             padding: 1.2rem 1.5rem;
//             background: #1eff00;
//             color: #000000;
//           `;
//         };
//       } else {  
//          if ( size === 'sd') {
//           return `
//           padding: .2rem .5rem;
//           background: #1eff00;
//           color: #000000;
//         `;
//       } else if ( size === 'md') {
//         return `
//           padding: .5rem .7rem;
//           background: #1eff00;
//           color: #000000;
//         `;
//       } else if ( size === 'lg') {
//         return `
//           padding: 1rem 1.2rem;
//           background: #1eff00;
//           color: #000000;
//         `;
//       } else if ( size === 'bg') {
//         return `
//           padding: 1.2rem 1.5rem;
//           background: #1eff00;
//           color: #000000;
//         `;
//       } else {
//         return `
//           background: #1eff00;
//           color: #000000;
//         `;
//       };
//     };
//   };
//   // para cor warning
//   if (cor === 'warning') {
//     if ( size !== null) {
//       if ( rmd !== null) {
//         if ( brd !== null) {
//           if ( size === 'sd') {
//             return `
//               border: 1px solid;  
//               border-radius: 5px;
//               padding: .2rem .5rem;
//               background: #fdf902;
//               color: #000000;
//             `;
//           } else if ( size === 'md') {
//             return `
//               border: 1.5px solid;
//               border-radius: 10px;          
//               padding: .5rem .7rem;
//               background: #fdf902;
//               color: #000000;
//             `;
//           } else if ( size === 'lg') {
//             return `
//               border: 2px solid;
//               border-radius: 15px;
//               padding: 1rem 1.2rem;
//               background: #fdf902;
//               color: #000000;
//             `;
//           } else if ( size === 'bg') {
//             return `
//               border: 2.5px solid;
//               border-radius: 20px;
//               padding: 1.2rem 1.5rem;
//               background: #fdf902;
//               color: #000000;
//             `;
//           };
//         } else if ( size === 'sd') {
//           return `
//             border: none;
//             border-radius: 5px;
//             padding: .2rem .5rem;
//             background: #fdf902;
//             color: #000000;
//           `;
//         } else if ( size === 'md') {
//           return `
//             border: none;
//             border-radius: 10px;          
//             padding: .5rem .7rem;
//             background: #fdf902;
//             color: #000000;
//           `;
//         } else if ( size === 'lg') {
//           return `
//             border: none;
//             border-radius: 15px;
//             padding: 1rem 1.2rem;
//             background: #fdf902;
//             color: #000000;
//           `;
//         } else if ( size === 'bg') {
//           return `
//             border: none;
//             border-radius: 20px;
//             padding: 1.2rem 1.5rem;
//             background: #fdf902;
//             color: #000000;
//           `;
//         };
//       } else {  
//          if ( size === 'sd') {
//           return `
//           padding: .2rem .5rem;
//           background: #fdf902;
//           color: #000000;
//         `;
//       } else if ( size === 'md') {
//         return `
//           padding: .5rem .7rem;
//           background: #fdf902;
//           color: #000000;
//         `;
//       } else if ( size === 'lg') {
//         return `
//           padding: 1rem 1.2rem;
//           background: #fdf902;
//           color: #000000;
//         `;
//       } else if ( size === 'bg') {
//         return `
//           padding: 1.2rem 1.5rem;
//           background: #fdf902;
//           color: #000000;
//         `;
//       } else {
//         return `
//           background: #fdf902;
//           color: #000000;
//         `;
//       };
//     };
//   };

//   return `
//     background: #fdfdfd;
//     color: #333333;
//   `;
// }
//  const Button = styled.button`
//   border: none;
//   cursor: point;
//   ${({ cor, size, rmd, brd }) => getStyle(cor, size, rmd, brd)}
//   `;

// export default Button; 
