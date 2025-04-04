// Mock para sb-original/image-context
import React from 'react';

export const ImageContext = React.createContext({
  showResponsiveImage: false,
  setShowResponsiveImage: () => {},
});

export default ImageContext;
