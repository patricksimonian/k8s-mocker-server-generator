// Path: routes/ApisEvents.k8s.ioV1WatchEventsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchEventsV1EventListForAllNamespaces } from '../controllers/EventsV1Controller'

import {router} from './router';

router.get('/apis/events.k8s.io/v1/watch/events', watchEventsV1EventListForAllNamespaces)

export default router;
