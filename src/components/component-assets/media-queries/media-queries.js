import { useMediaQuery } from 'react-responsive';


export const GridLg = ({ children }) => {
  const isGridLg = useMediaQuery({ minWidth: 1200 })
  return isGridLg ? children : null
}

export const GridMd = ({ children }) => {
  const isGridMd = useMediaQuery({ minWidth: 992, maxWidth: 1199 })
  return isGridMd ? children : null
}

export const GridSm = ({ children }) => {
  const isGridSm = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isGridSm ? children : null
}

export const GridXs = ({ children }) => {
  const isGridXs = useMediaQuery({ maxWidth: 767 })
  return isGridXs ? children : null
}

export const GridXxs = ({ children }) => {
  const isGridXxs = useMediaQuery({ maxWidth: 576 })
  return isGridXxs ? children : null
}

export const AboveGridXs = ({ children }) => {
  const isAboveGridXs = useMediaQuery({ minWidth: 768 })
  return isAboveGridXs ? children : null
}