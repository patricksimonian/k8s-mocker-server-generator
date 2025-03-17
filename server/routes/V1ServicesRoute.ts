// Path: routes/V1ServicesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { listCoreV1ServiceForAllNamespaces } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/services', listCoreV1ServiceForAllNamespaces)

export default router;
