import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class VpcPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'VpcPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('anilah/vpc-pipeline', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });





  }
}
