// Path: routes/ApisRbac.authorization.k8s.ioV1WatchNamespaces{namespace}Rolebindings{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchRbacAuthorizationV1NamespacedRoleBinding } from '../controllers/RbacAuthorizationV1Controller'

import {router} from './router';

router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings/:name', watchRbacAuthorizationV1NamespacedRoleBinding)

export default router;
