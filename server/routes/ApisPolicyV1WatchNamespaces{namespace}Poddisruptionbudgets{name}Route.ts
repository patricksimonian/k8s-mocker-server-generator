// Path: routes/ApisPolicyV1WatchNamespaces{namespace}Poddisruptionbudgets{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchPolicyV1NamespacedPodDisruptionBudget } from '../controllers/PolicyV1Controller'

import {router} from './router';

router.get('/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name', watchPolicyV1NamespacedPodDisruptionBudget)

export default router;
