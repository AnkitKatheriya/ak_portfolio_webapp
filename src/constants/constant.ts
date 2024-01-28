const SIZE = {
    MOBILE_S: '320px',
    MOBILE_M: '375px',
    MOBILE_L: '425px',
    TABLET_S: '560px',
    TABLET: '768px',
    LAPTOP: '1024px',
    LAPTOP_L: '1440px',
    DESKTOP: '2560px'
}

const DEVICE = {
    MOBILE_S: `(max-width: ${SIZE.MOBILE_S})`,
    MOBILE_M: `(max-width: ${SIZE.MOBILE_M})`,
    MOBILE_L: `(max-width: ${SIZE.MOBILE_L})`,
    TABLET_S: `(max-width: ${SIZE.TABLET_S})`,
    TABLET: `(max-width: ${SIZE.TABLET})`,
    LAPTOP: `(max-width: ${SIZE.LAPTOP})`,
    LAPTOP_L: `(max-width: ${SIZE.LAPTOP_L})`,
    DESKTOP: `(max-width: ${SIZE.DESKTOP})`,
  };

export {
    DEVICE,
}