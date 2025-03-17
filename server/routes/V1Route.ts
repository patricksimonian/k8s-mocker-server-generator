// Path: routes/V1Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { getCoreV1APIResources } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/', getCoreV1APIResources)

export default router;
