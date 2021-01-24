export default [
  {
    path: '/',
    displayName: 'Welcome'
  },
  {
    path: '/introduction',
    displayName: 'Introduction'
  },
  {
    path: null,
    displayName: 'GET STARTED',
    children: [
      {
        path: '/installation',
        displayName: 'Installation'
      },
      {
        path: '/clone-project-seed',
        displayName: 'Clone Project Seed'
      },
      {
        path: '/directory-structure',
        displayName: 'Directory Structure'
      },
      {
        path: '/conventional-commits',
        displayName: 'Conventional Commits (git)'
      },
    ]
  },
  {
    path: null,
    displayName: 'TRAINING 101',
    children: [
      {
        path: '/create-ui-using-tailwindcss',
        displayName: 'Create UI using TailwindCSS'
      },
      {
        path: '/data-class-binding',
        displayName: 'Data & Class Binding'
      },
      {
        path: '/methods-functionality',
        displayName: 'Methods & Functionality'
      },
      {
        path: '/api-integration',
        displayName: 'API Integration'
      },
      {
        path: '/build-deploy',
        displayName: 'Build & Deploy'
      }
    ]
  },
]