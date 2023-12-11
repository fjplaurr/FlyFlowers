import * as React from 'react';
import PropTypes from 'prop-types';
import variables from '../variables.scss';

const Calendar = ({ size = 'big' }) => {
  if (size === 'small') {
    return (
      <svg width={48} viewBox="16 10 52 53">
        <path
          d="M16.8 73.08h50.4v-42H16.8v42zM18.48 63h7.56v8.4h-7.56V63zM46.2 52.92v8.4h-8.4v-8.4h8.4zm-8.4-1.68v-8.4h8.4v8.4h-8.4zm-1.68 10.08h-8.4v-8.4h8.4v8.4zm0 1.68v8.4h-8.4V63h8.4zm1.68 0h8.4v8.4h-8.4V63zm10.08 0h8.4v8.4h-8.4V63zm0-1.68v-8.4h8.4v8.4h-8.4zm10.08-8.4h7.56v8.4h-7.56v-8.4zm0-1.68v-8.4h7.56v8.4h-7.56zm-1.68 0h-8.4v-8.4h8.4v8.4zm-8.4-10.08v-8.4h8.4v8.4h-8.4zm-1.68 0h-8.4v-8.4h8.4v8.4zm-10.08 0h-8.4v-8.4h8.4v8.4zm0 1.68v8.4h-8.4v-8.4h8.4zm-10.08 8.4h-7.56v-8.4h7.56v8.4zm0 1.68v8.4h-7.56v-8.4h7.56zM57.96 71.4V63h7.56v8.4h-7.56zm7.56-30.24h-7.56v-8.4h7.56v8.4zm-39.48-8.4v8.4h-7.56v-8.4h7.56zM60.48 18.48H58.8v-5.46a1.68 1.68 0 00-3.36 0v5.46H28.56v-5.46a1.68 1.68 0 00-3.36 0v5.46h-1.68c-3.711 0-6.72 2.589-6.72 6.3v3.78h50.4v-3.78c0-3.711-3.01-6.3-6.72-6.3zm-33.602 7.98a3.36 3.36 0 01-3.36-3.36c0-1.242.681-2.313 1.682-2.896V23.1a1.68 1.68 0 003.36 0v-2.893a3.346 3.346 0 011.678 2.893 3.36 3.36 0 01-3.36 3.36zm30.24 0a3.36 3.36 0 01-3.36-3.36c0-1.242.681-2.313 1.682-2.896V23.1a1.68 1.68 0 003.36 0v-2.893a3.346 3.346 0 011.678 2.893 3.36 3.36 0 01-3.36 3.36z"
          fill={variables.black}
        />
        <path
          d="M34.44 34.44H29.4v5.04h5.04v-5.04zM54.6 54.6h-5.04v5.04h5.04V54.6zM44.52 54.6h-5.04v5.04h5.04V54.6z"
          fill={variables.pink}
        />
      </svg>
    );
  }
  return (
    <svg width={180} height={180} viewBox="0 0 180 180" fill="none">
      <g clipPath="url(#prefix__clip0)">
        <path
          opacity={0.1}
          d="M98.867 28.194c-10.578-.57-20.652-5.857-30.274-11.642-9.622-5.785-19.149-12.196-29.473-15.26C32.48-.68 24.886-.959 19.535 4.552c-5.149 5.315-6.812 14.464-7.708 22.96-.672 6.395-1.069 13.122.776 19.108 1.28 4.155 3.554 7.648 5.126 11.629 5.469 13.849 1.603 30.927-4.325 44.449-2.778 6.342-6.005 12.401-8.15 19.148-2.147 6.747-3.139 14.489-1.262 21.378 1.861 6.833 6.295 11.955 11.097 15.562 9.756 7.324 21.248 9.422 32.463 10.609 24.813 2.63 49.761 1.491 74.64.352 9.208-.423 18.456-.851 27.514-3.055 5.03-1.225 10.225-3.168 13.876-7.845 4.635-5.955 5.784-16.041 2.679-23.507-5.211-12.525-19.613-15.638-23.26-29.079-2.005-7.397.054-15.64 2.967-22.501 6.25-14.722 16.725-27.634 17.277-44.462.379-11.556-4.656-23.13-12.443-28.598-8.162-5.733-19.478-5.011-25.496 4.477-6.205 9.759-17.1 13.517-26.439 13.016z"
          fill={variables.midGreen}
        />
        <path
          d="M16.2 180.855h147.6v-123H16.2v123zm4.92-29.52h22.14v24.6H21.12v-24.6zm81.18-29.52v24.6H77.7v-24.6h24.6zm-24.6-4.92v-24.6h24.6v24.6H77.7zm-4.92 29.52h-24.6v-24.6h24.6v24.6zm0 4.92v24.6h-24.6v-24.6h24.6zm4.92 0h24.6v24.6H77.7v-24.6zm29.52 0h24.6v24.6h-24.6v-24.6zm0-4.92v-24.6h24.6v24.6h-24.6zm29.52-24.6h22.14v24.6h-22.14v-24.6zm0-4.92v-24.6h22.14v24.6h-22.14zm-4.92 0h-24.6v-24.6h24.6v24.6zm-24.6-29.52v-24.6h24.6v24.6h-24.6zm-4.92 0H77.7v-24.6h24.6v24.6zm-29.52 0h-24.6v-24.6h24.6v24.6zm0 4.92v24.6h-24.6v-24.6h24.6zm-29.52 24.6H21.12v-24.6h22.14v24.6zm0 4.92v24.6H21.12v-24.6h22.14zm93.48 54.12v-24.6h22.14v24.6h-22.14zm22.14-88.56h-22.14v-24.6h22.14v24.6zm-115.62-24.6v24.6H21.12v-24.6h22.14z"
          fill={variables.black}
        />
        <path
          d="M138.7 20.955v.5h5.42c10.636 0 19.18 7.4 19.18 17.95v10.57H16.7v-10.57c0-10.55 8.544-17.95 19.18-17.95h5.42V4.965c0-2.44 1.98-4.42 4.42-4.42s4.42 1.98 4.42 4.42V21.455h79.72V4.965c0-2.44 1.98-4.42 4.42-4.42s4.42 1.98 4.42 4.42v15.99zm-97.4 5.05v-.869l-.751.437c-3.074 1.788-5.174 5.084-5.174 8.912 0 5.713 4.627 10.34 10.34 10.34s10.34-4.627 10.34-10.34c0-3.82-2.095-7.116-5.163-8.904l-.752-.438V34.485c0 2.44-1.98 4.42-4.42 4.42s-4.42-1.98-4.42-4.42v-8.48zm88.56 0v-.869l-.751.437c-3.074 1.788-5.174 5.084-5.174 8.912 0 5.713 4.627 10.34 10.34 10.34s10.34-4.627 10.34-10.34c0-3.82-2.095-7.116-5.163-8.904l-.752-.438V34.485c0 2.44-1.98 4.42-4.42 4.42s-4.42-1.98-4.42-4.42v-8.48z"
          fill={variables.black}
          stroke={variables.black}
        />
        <path
          d="M67.86 67.695H53.1v14.76h14.76v-14.76zM97.38 126.735H82.62v14.76h14.76v-14.76z"
          fill={variables.pink}
        />
      </g>
    </svg>
  );
};

Calendar.propTypes = {
  size: PropTypes.oneOf(['big', 'small']),
};

export default Calendar;
