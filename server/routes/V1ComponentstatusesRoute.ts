// Path: routes/V1ComponentstatusesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { listCoreV1ComponentStatus } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/componentstatuses', listCoreV1ComponentStatus)

export default router;
