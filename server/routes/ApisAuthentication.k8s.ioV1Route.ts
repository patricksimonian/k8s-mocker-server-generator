// Path: routes/ApisAuthentication.k8s.ioV1Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { getAuthenticationV1APIResources } from '../controllers/AuthenticationV1Controller'

import {router} from './router';

router.get('/apis/authentication.k8s.io/v1/', getAuthenticationV1APIResources)

export default router;
