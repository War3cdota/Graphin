import { NodeTheme } from './index';

const defaultNodeTheme = {
  primaryColor: '#FF6A00',
  nodeSize: 26,
  mode: 'light',
};
/**
 * getNodeStyleByTheme 通过主题，获取节点的样式
 * @param inputNodeTheme
 */
const getNodeStyleByTheme = (inputNodeTheme: NodeTheme) => {
  const { nodeSize, primaryColor, mode } = { ...defaultNodeTheme, ...inputNodeTheme };
  const labelSize = 12;
  const Colors = {
    light: {
      fill: primaryColor,
      fillOpacity: 0.1,
      stroke: primaryColor,
      strokeOpacity: 1,
      icon: primaryColor,
      badge: {
        fill: primaryColor,
        stroke: primaryColor,
        font: '#fff',
      },
      label: '#000',
      disabled: '#ddd',
    },
    dark: {
      fill: primaryColor,
      fillOpacity: 0.3,
      stroke: primaryColor,
      strokeOpacity: 1,
      icon: '#fff',
      badge: {
        fill: primaryColor,
        stroke: primaryColor,
        font: '#fff',
      },
      label: '#fff',
      disabled: '#ddd3',
    },
  };

  const Color = Colors[mode];

  const defaultStyle = {
    type: 'graphin-circle',
    style: {
      keyshape: {
        size: [nodeSize, nodeSize],
        fill: Color.fill,
        fillOpacity: Color.fillOpacity,
        stroke: Color.stroke, // storke is primaryColor
        strokeOpacity: Color.strokeOpacity,
        lineWidth: 1,
        opacity: 1,
        type: 'circle',
      },
      label: {
        position: 'bottom',
        value: '',
        fill: Color.label,
        fontSize: labelSize,
        offset: 0,
        background: undefined,
      },
      icon: {
        type: 'text',
        value: '',
        size: nodeSize / 2,
        fill: Color.icon,
        offset: [0, 0],
      },
      badges: [],
      halo: {
        visible: false,
      },
    },
    status: {
      selected: {
        halo: {
          visible: true,
        },
        keyshape: {
          lineWidth: 5,
        },
      },
      hover: {
        halo: {
          visible: true,
        },
      },
      active: {
        halo: {
          visible: false,
        },
      },
      inactive: {
        halo: {
          visible: false,
        },
        keyshape: {
          lineWidth: 0,
          fill: Color.disabled,
          stroke: Color.disabled,
        },
        icon: {
          fill: Color.disabled,
        },
        label: {
          fill: Color.disabled,
        },
      },
      disabled: {
        halo: {
          visible: false,
        },
        keyshape: {
          lineWidth: 0,
          fill: Color.disabled,
          stroke: Color.disabled,
        },
        icon: {
          fill: Color.disabled,
        },
        label: {
          fill: Color.disabled,
        },
      },
    },
  };
  return defaultStyle;
};

export default getNodeStyleByTheme;