// Path: routes/ApisAppsV1Namespaces{namespace}Deployments{name}StatusRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { readAppsV1NamespacedDeploymentStatus } from '../controllers/AppsV1Controller'
import { patchAppsV1NamespacedDeploymentStatus } from '../controllers/AppsV1Controller'
import { replaceAppsV1NamespacedDeploymentStatus } from '../controllers/AppsV1Controller'

import {router} from './router';

router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', readAppsV1NamespacedDeploymentStatus)

router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', patchAppsV1NamespacedDeploymentStatus)

router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', replaceAppsV1NamespacedDeploymentStatus)

export default router;
