// Path: routes/ApisRbac.authorization.k8s.ioV1WatchRolesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchRbacAuthorizationV1RoleListForAllNamespaces } from '../controllers/RbacAuthorizationV1Controller'

import {router} from './router';

router.get('/apis/rbac.authorization.k8s.io/v1/watch/roles', watchRbacAuthorizationV1RoleListForAllNamespaces)

export default router;
