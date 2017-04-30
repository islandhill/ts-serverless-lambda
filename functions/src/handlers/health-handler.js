'use strict';
import HealthController from '../controllers/health-controller';
import TestStore from '../store/test-store';

export const healthHandler = (event, context, callback) => {
  const testStore = new TestStore({});
  const healthController = new HealthController(testStore);
  callback(null, healthController.check());
};
