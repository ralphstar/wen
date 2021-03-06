jest.mock('../../../middlewares/login.ssr.middleware', () => () => 'serveMiddleware');

const route = require('../login.route');


const router = {
  get: jest.fn().mockReturnValue('route')
};

it('should have proper middleware composition', () => {
  route(router);

  const actual = route(router);

  expect(router.get).toHaveBeenCalledWith('/login', 'serveMiddleware');
  expect(actual).toEqual('route');
});
