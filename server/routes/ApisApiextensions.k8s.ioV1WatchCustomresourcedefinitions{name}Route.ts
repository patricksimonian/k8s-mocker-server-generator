// Path: routes/ApisApiextensions.k8s.ioV1WatchCustomresourcedefinitions{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchApiextensionsV1CustomResourceDefinition } from '../controllers/ApiextensionsV1Controller'

import {router} from './router';

router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name', watchApiextensionsV1CustomResourceDefinition)

export default router;
