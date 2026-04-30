import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

import { FaStar } from 'react-icons/fa';
const PhotoCard = ({photo}) => {
    console.log(photo)
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={photo.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.title}
                className='object-cover rounded-xl'>

                </Image>
                <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>
            <div>
                <h2 className='font-medium text-slate-800'>{photo.title}</h2>
                <p className="text-gray-500 text-xs font-medium">{photo.instructor}</p>
            </div>
            <div className='flex gap-5'>
                <div className='flex items-center gap-2 text-[#006591]'>
                <p><FaStar /></p>
                <p>{photo.rating}</p>
            </div>
            
            </div>
            <Link href={`/all-photos/${photo.id}`}>
            <Button variant='outline' className={'w-full text-blue-600 text-xs font-bold'}>View Details</Button>
            </Link>
            
        </Card>
    );
};

export default PhotoCard;