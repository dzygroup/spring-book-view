import { defineConfig } from 'umi';

export default defineConfig( {
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/components/layout/index',
      routes: [
        { path: '/', component: '@/pages/index' },
      ],
    },
  ],
} );
