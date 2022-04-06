import React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
  Text,
  TSpan,
} from 'react-native-svg';
import { useTheme } from 'styled-components';

import { Container } from './styles';

export function CustomBackground() {
  const theme = useTheme();

  return (
    // <Svg
    //   // width={412}
    //   // height={778}
    //   // viewBox="0 0 412 778"s
    //   style={{
    //     position: 'absolute',
    //     flex: 1,
    //     backgroundColor: theme.colors.background_dark,
    //   }}
    // >
    //   <Defs>
    //     {/* <Rect width={412} height={778} /> */}
    //     <RadialGradient
    //       id="grad"
    //       cx="150"
    //       cy="75"
    //       rx="85"
    //       ry="55"
    //       fx="150"
    //       fy="75"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <Stop offset="0" stopColor="#ff0" stopOpacity="1" />
    //       <Stop offset="1" stopColor="#83a" stopOpacity="1" />
    //     </RadialGradient>
    //   </Defs>
    //   <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
    //   <Circle cx='218' cy='218' r='217.5' fill="url(#grad)" />
    //   {/* <Ellipse cx={164.5} cy={148.5} rx={164} ry={148} fill="url(#grad)" /> */}

    //   {/* <G id="a">
    //     <Rect width={412} height={778} />
    //     <G transform="translate(0 -523.778)">
    //       <G transform="translate(-169 927.778)">
    //         <Circle cx={218} cy={218} r={218} />
    //         <Circle fill="#00B600" cx={218} cy={218} r={217.5} />
    //       </G>
    //       <G transform="translate(159 570.778)">
    //         <Circle cx={218} cy={218} r={218} />
    //         <Circle
    //           fillOpacity={0.2}
    //           fill="#00B600"
    //           cx={218}
    //           cy={218}
    //           r={217.5}
    //         />
    //       </G>
    //       <G transform="translate(238 912.778)">
    //         <Ellipse cx={164.5} cy={148.5} rx={164.5} ry={148.5} />
    //         <Ellipse fill="#00B600" cx={164.5} cy={148.5} rx={164} ry={148} />
    //       </G>
    //       <G transform="translate(-62 1091.778)">
    //         <Ellipse
    //           fill="#00B600"
    //           cx={164.5}
    //           cy={148.5}
    //           rx={164.5}
    //           ry={148.5}
    //         />
    //         <Ellipse fill="#00B600" cx={164.5} cy={148.5} rx={164} ry={148} />
    //       </G>
    //     </G>
    //     <Text transform="translate(138 732)">
    //       <TSpan x={0} y={0}>
    //         {'Carregando carteira...'}
    //       </TSpan>
    //     </Text>
    //     <G transform="translate(180.625 661.75)">
    //       <Path
    //         d="M27.919,9.46a7.21,7.21,0,1,1-7.21-7.21A7.21,7.21,0,0,1,27.919,9.46Z"
    //         transform="translate(6.097 0)"
    //       />
    //       <Path
    //         d="M14.189,20.032a5.407,5.407,0,1,1-5.407-5.407A5.407,5.407,0,0,1,14.189,20.032Z"
    //         transform="translate(0 7.451)"
    //       />
    //       <Path
    //         d="M27.115,10.45a.9.9,0,1,1-.9-.864.9.9,0,0,1,.9.864Z"
    //         transform="translate(13.21 4.417)"
    //       />
    //       <Path
    //         d="M16.348,8.2a5.707,5.707,0,0,0-8.123,0,5.842,5.842,0,0,0,0,8.2,5.707,5.707,0,0,0,8.123,0A5.842,5.842,0,0,0,16.348,8.2Z"
    //         transform="translate(1.908 2.563)"
    //       />
    //       <Path
    //         d="M31.73,18.677a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,31.73,18.677Z"
    //         transform="translate(14.903 8.806)"
    //       />
    //       <Path
    //         d="M29.665,26.937a2.7,2.7,0,1,1-2.7-2.639,2.7,2.7,0,0,1,2.7,2.639Z"
    //         transform="translate(12.574 13.276)"
    //       />
    //       <Path
    //         d="M22.96,30.6a3.6,3.6,0,1,1-3.6-3.6A3.6,3.6,0,0,1,22.96,30.6Z"
    //         transform="translate(7.451 14.903)"
    //       />
    //       <Path
    //         d="M16.325,27.569a4.506,4.506,0,1,1-4.506-4.507,4.507,4.507,0,0,1,4.506,4.507Z"
    //         transform="translate(2.371 12.532)"
    //       />
    //     </G>
    //     <G transform="translate(0 -1)">
    //       <Text transform="translate(80 469)">
    //         <TSpan x={0} y={0}>
    //           {'Vida de estudante'}
    //         </TSpan>

    //   </G> */}
    // </Svg>

    <Svg
      style={{
        position: 'absolute',
        flex: 1,
        backgroundColor: theme.colors.background_light,
      }}
    >
      <Defs>
        <RadialGradient
          // id="grad"
          // cx="150"
          // cy="75"
          // rx="85"
          // ry="55"
          // fx="150"
          // fy="75"
          // gradientUnits="userSpaceOnUse"
        >
          <Stop offset="1" stopColor={theme.colors.income} stopOpacity="1" />
          <Stop
            offset="1"
            stopColor={theme.colors.background_dark}
            stopOpacity="1"
          />
        </RadialGradient>
      </Defs>
      {/* <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" /> */}

      {/* <Circle cx='218' cy='218' r='218' fill="url(#grad)"/> */}
      {/* <Circle cx='218' cy='218' r='217.5' fill="url(#grad)"/> */}
      {/* <Circle cx='218' cy='218' r='218' fill="url(#grad)"/> */}
      <Circle cx='218' cy='218' r='217.5' fill="url(#grad)"/>
      {/* <Ellipse cx='164.5' cy='148.5' rx='164.5' ry='148.5' fill="url(#grad)"/> */}
      {/* <Ellipse cx='164.5' cy='148.5' rx='164' ry='148' fill="url(#grad)"/>
      <Ellipse cx='164.5' cy='148.5' rx='164.5' ry='148.5' fill="url(#grad)"/>
      <Ellipse cx='164.5' cy='148.5' rx='164' ry='148' fill="url(#grad)" /> */}
    </Svg>
  );
}
