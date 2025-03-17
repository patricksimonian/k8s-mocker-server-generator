// Path: routes/ApisRbac.authorization.k8s.ioV1Clusterroles{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteRbacAuthorizationV1ClusterRole } from '../controllers/RbacAuthorizationV1Controller'
import { readRbacAuthorizationV1ClusterRole } from '../controllers/RbacAuthorizationV1Controller'
import { patchRbacAuthorizationV1ClusterRole } from '../controllers/RbacAuthorizationV1Controller'
import { replaceRbacAuthorizationV1ClusterRole } from '../controllers/RbacAuthorizationV1Controller'

import {router} from './router';

router.delete('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', deleteRbacAuthorizationV1ClusterRole)

router.get('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', readRbacAuthorizationV1ClusterRole)

router.patch('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', patchRbacAuthorizationV1ClusterRole)

router.put('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', replaceRbacAuthorizationV1ClusterRole)

export default router;
