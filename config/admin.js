module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '19849afa290121ce090376f63eb58fff'),
  },
});
