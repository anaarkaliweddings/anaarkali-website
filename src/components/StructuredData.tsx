import { generateStructuredData } from '../../lib/seo';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'WeddingService' | 'Article';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const schema = generateStructuredData(type, data);
  
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
