// Path: routes/ApisStoragemigration.k8s.ioV1alpha1WatchStorageversionmigrations{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchStoragemigrationV1alpha1StorageVersionMigration } from '../controllers/StoragemigrationV1alpha1Controller'

import {router} from './router';

router.get('/apis/storagemigration.k8s.io/v1alpha1/watch/storageversionmigrations/:name', watchStoragemigrationV1alpha1StorageVersionMigration)

export default router;
