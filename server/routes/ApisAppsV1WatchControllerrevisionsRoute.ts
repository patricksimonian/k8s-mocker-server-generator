// Path: routes/ApisAppsV1WatchControllerrevisionsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchAppsV1ControllerRevisionListForAllNamespaces } from '../controllers/AppsV1Controller'

import {router} from './router';

router.get('/apis/apps/v1/watch/controllerrevisions', watchAppsV1ControllerRevisionListForAllNamespaces)

export default router;
