// Path: routes/Logs{logpath}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { logFileHandler } from '../controllers/LogsController'

import {router} from './router';

router.get('/logs/:logpath', logFileHandler)

export default router;
