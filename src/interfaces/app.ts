// import express, { NextFunction } from 'express';
// import { router as userCreateEndpoint } from './user/user-controller';
// import swaggerUi from 'swagger-ui-express';
// import morgan from 'morgan';
//
// const app = express();
//
// app.use(express.json());
//
// app.use(express.json());
// app.use(morgan('tiny'));
// app.use(express.static('public'));
//
// app.use(
//   '/docs',
//   swaggerUi.serve,
//   swaggerUi.setup(undefined, {
//     swaggerOptions: {
//       url: '/swagger.json'
//     }
//   })
// );
//
// app.use('/api/v1', userCreateEndpoint);
// // @ts-ignore
// app.get('/', (req: Request, res: Response, next: NextFunction): void => {
//   // @ts-ignore
//   res.status(200).json({ message: 'Catch all route.' });
// });
//
// export { app };
