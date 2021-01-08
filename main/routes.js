export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PHome
  },
  {
    path: '/pokemon/:id?',
    exact: true,
    component: components.PAbout
  }
]
