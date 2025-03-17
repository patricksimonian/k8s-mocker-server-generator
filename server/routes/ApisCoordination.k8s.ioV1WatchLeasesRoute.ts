// Path: routes/ApisCoordination.k8s.ioV1WatchLeasesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoordinationV1LeaseListForAllNamespaces } from '../controllers/CoordinationV1Controller'

import {router} from './router';

router.get('/apis/coordination.k8s.io/v1/watch/leases', watchCoordinationV1LeaseListForAllNamespaces)

export default router;
